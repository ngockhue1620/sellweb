<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;




use Illuminate\Support\Facades\Hash;
use DB;
use App\Models\File;


class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        $length = $request->per_page;
        $global_search = $request->global_search;
        $sort = $request->sort;
        $files = File::with(['owner']);

        //limit results if the request is not from admin tools
        // $isAdmin = $request->admin;
        // if(!$request->user()->tokenCan('admin_files')) {
        //     $isAdmin = false;
        // }
        // if(!$isAdmin) {
        //     $files = $files->where('owner_id',$request->user()->id);
        // }

        if ($global_search) {
            $files = $files->where(function ($files) use ($global_search) {
                $files->where('name', 'like', '%' . $global_search . '%')
                    ->orWhere('original_filename', 'like', '%' . $global_search . '%');
            });
        }

        if($sort) {
            $sort = $sort[0];
            $sort = json_decode($sort);
            $files = $files->orderBy($sort->name, $sort->order);
        }
         
        if($length) {
            $files = $files->paginate($length);
        } else {
            $files = $files->get();
        }
        return response()->json([
            'files' => $files,
        ]);
        // return File::all();
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valid = validator($request->only('file', 'access_mode'), [
            'file' => 'required',
            'access_mode' => ['required','regex:/^(public|private|only_clients|special_people)$/'],
        ]);
    
        if ($valid->fails()) {
            return response()->json($valid->errors()->all(), 400);
        }
        
        // $file_name = $request->user()->id . '_' . time();
        $file_name = 'f_' . time();
        $file_name = hash('sha256',$file_name);
       
        DB::beginTransaction();
        try{
            $file = new File;
            $file->name  = $file_name;
            $file->original_filename = $request->file->getClientOriginalName();
            $file->content_type = $request->file->getMimeType();
            $file->size = $request->file->getSize();
            //$file->data = base64_encode(file_get_contents($request->file));
            $file->data = file_get_contents($request->file);
            // $file->owner_id = $request->user()->id;
            $file->owner_id = 1;
            $file->access_mode = $request->access_mode;
            $file->save();
            Db::commit();
            return response()->json([
                'file' => new FileResource($file->makeHidden('data'))
            ]);
        }
        catch(Exception $e){
            DB::rollback();
            return response()->json([
                'error' => [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => $e->getMessage()
                ]
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $file = File::with(['owner'])->find($id);
            
            if($file == null){
                return response()->json(['message' => 'Data not found'],404);
            }
            return response()->json([
                'file' => new FileResource($file->makeHidden('data'))
            ]);   
        } catch (\Exception $e) {
            return response()->json([
                'error' => [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => $e->getMessage()
                ]
            ],500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $valid = validator($request->only('access_mode'), [
            'access_mode' => ['regex:/^(public|private|only_clients|special_people)$/'],
        ]);
    
        if ($valid->fails()) {
            return response()->json($valid->errors()->all(), 400);
        }
        DB::beginTransaction();
        try{
            $file = File::find($id);
            if(!$file){
                return response()->json(['message' => 'Data not found'],404);
            }
            if($file && $request->file){
                $file->original_filename = $request->file->getClientOriginalName();
                $file->content_type      = $request->file->getMimeType();
                $file->size              = $request->file->getSize();
                //$file->data              = base64_encode(file_get_contents($request->file));
                $file->data = file_get_contents($request->file);
                $file->owner_id = $request->user()->id;
            }
            if($file && $request->access_mode){
                $file->access_mode = $request->access_mode;
            }
            $file->save();
            Db::commit();
            return response()->json([
                'file' => new FileResource($file->makeHidden('data'))
            ]);
        }
        catch(Exception $e){
            DB::rollback();
            return response()->json([
                'error' => [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => $e->getMessage()
                ]
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
	    	$file = File::find($id);
	    	if ($file == null) {
	    		return response()->json(['message' => 'Data not found'],404);
            }
            
            //Only admin can change the customer created by other user
            if($file->owner_id != null && 
                $file->owner_id != $request->user()->id && 
                !$request->user()->tokenCan('admin_files')) {
                return response()->json([
                    'error' => 'Permission denied!'
                ], 400);
            }

	    	$file->delete();
    		return response()->json(['message' => 'Delete successful'],200);
    	} catch (\Exception $e) {
    		return response()->json([
                'error' => [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => $e->getMessage()
                ]
            ],500);
        }
    }

    /**
     * Download file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function download($id)
    {   
        
        $file = File::where('name',$id)->first();
        
        if(!is_null($file)) {
            return response($file->data, 200,
            ['Content-type' => $file->content_type,
            'Content-length' => $file->size,
           
            ]);
        }
        return response()->json(['message' => 'Data not found'],404);
    }

  
}

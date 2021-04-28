<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Supplier::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * add supplier
     */
    public function store(Request $request)
    {   
       
        try{
            // find is has => update
            // find is none => create
            $supplier = Supplier::firstOrCreate([
                'supplierName'=>$request->supplierName,
                'address'     =>$request->address
            ]);
            $supplier->save();
            return response()->json(['category'=> $supplier],200);

        }
        catch(\Exception $e)
        {
            return response()->json([
                'error'=>[
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        
        try{
            $supplier =Supplier::find($id);
            if(empty($supplier))
            {
                return \response()->json(['error'=>'Data is not found'],404);
            }
            else
            {
                $supplier->update($request->all());
                return response()->json(['supplier'=>$supplier],200);
            }
        }
        catch(\Exception $e)
        {
            return response()->json([
                'error'=>[
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
        try{
            $supplier =Supplier::find($id);
            if(empty($supplier))
            {
                return \response()->json(['error'=>'Data is not found'],404);
            }
            else
            {
                $supplier->delete();
                return response()->json(['message'=>"Delete Successful"],200);
            }
        }
        catch(\Exception $e)
        {
            return response()->json([
                'error'=>[
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => $e->getMessage()
                ]
                ],500);
        }
    }
}

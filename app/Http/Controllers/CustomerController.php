<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {   
        try{
            return Customer::orderBy('created_at','desc')->get();
            // return \response()->json(['customer'=>$customer,'status'=>true]);
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            // find is has => update
            // find is none => create

            $customer=Customer::where('email','=',$request->email)
                               ->orWhere('phone','=',$request->phone)->get();
                              
            $erro=[];
            if(!empty($customer)&& count($customer)>0)
            {
                if($customer[0]->email==$request->email)
                {
                    array_push($erro,"Email đã tồn tại");
                }

                if($customer[0]->phone==$request->phone)
                {
                    
                    array_push($erro,"SDt đã tồn tại");
                }
                return response()->json(["status"=>$erro,"id"=>$customer[0]->id]);
            }
            
            $customer = Customer::Create($request->all());
            $customer->save();
            
            return response()->json(['customer'=> $customer,'status'=>true],200);

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
        try{
            // find is has => update
            // find is none => create            
             $customer = Customer::where('id','=',$id)->with(['getInCart'])->get();
             
            if(empty($customer))
            {
                return \response()->json(["status"=>false],404);
            }
            
            return response()->json(['customer'=> $customer,'status'=>true],200);

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
            $customer =Customer::find($id);
            if(empty($customer))
            {
                return \response()->json(['error'=>'Data is not found','status'=>false],404);
            }
            else
            {
                $customer->update($request->all());
                return response()->json(['customer'=>$customer,'status'=>true],200);
                
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
            $customer =Customer::find($id);
            if(empty($customer))
            {
                return \response()->json(['error'=>'Data is not found','status'=>false],404);
            }
            else
            {
                $customer->delete();
                return response()->json(['message'=>"Delete successful",'status'=>true],200);
                
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

    public function login(Request $request)
    {   
        
        try{
                        
             $customer = Customer::where('email','=',$request->email)
                                 ->where('password','=',$request->password)
                                 ->with(['getInCart'])->get();
             return $customer;
            if(empty($customer)|| count($customer)==0)
            {   
                return \response()->json(["status"=>false],404);
            }
            
            return response()->json(['customer'=> $customer,'status'=>true],200);

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

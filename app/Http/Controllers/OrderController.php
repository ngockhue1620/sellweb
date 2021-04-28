<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\InCart;
use DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Order::with(['orderDetail'])->get();
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
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try{
            
        $data = $request->only('customerId');
        $order = Order::Create($data);
        // create order detail
        $order->orderDetail()->createMany($request->orderDetails);
        // delete cart of customer
        InCart::destroy($request->customerId);
        DB::commit();
        return \response()->json(['order'=>$order,'status'=>true]);
        }
        
        catch (\Exception $e){
            DB::rollback();
            return response()->json([
                'error' => [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'message' => $e->getMessage()
                ]
                ],500);
        }
        finally{
            DB::disconnect();
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
        //
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
            $order =Order::find($id);
            if(empty($order))
            {
                return \response()->json(['error'=>'Data is not found','status'=>false],404);
            }
            else
            {
                $order->delete();
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
}

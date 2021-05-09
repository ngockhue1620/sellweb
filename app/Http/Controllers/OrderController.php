<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\InCart;
use App\Models\Product;
use App\Models\OrderDetail;
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
        return Order::where('isProcess',null)
        ->with(['orderDetail'])->get();
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
            
        $data = $request->only('customer_id','recipientPhone','recipientName','recipientAddress','note');
        $order = Order::Create($data);
        $errors=[];
        // create order detail
        
        foreach( $request->orderDetails as $value)
        {   
            
            $product = Product::find($value['product_id']);
            if($product->quantity<$value['quantity'])
            {  
                array_push($errors,$product->productName.' còn '.$product->quantity . ' sản phẩm');
            }
            else
            {
                $product->quantity=(int)$product->quantity-(int)$value['quantity'];
                $product->save();
            }
        }
        
        if(count($errors)>0)
        {
            DB::rollback();
            return \response()->json(['errors'=>$errors,'status'=>false]);
        }
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
        $order = Order::where('customer_id','=',$id)
                        ->whereNotNull('isProcess')
                        ->with(['orderDetail'])->get();
        return $order;
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
            $order=Order::find($id);
            $order->isProcess=$request->isProcess;
            $order->save();
            return \response()->json(['status'=>true]);
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

    public function historyOrder($id)
    {
        $order = Order::where('customer_id','=',$id)                        
                        ->with(['orderDetail'])
                        ->orderBy('created_at','desc')
                        ->get();
        return $order;

        
        
    }
}

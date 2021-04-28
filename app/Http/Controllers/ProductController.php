<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
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
     * id
   
     */
    public function store(Request $request)
    {
        try{
            if($request == null) return \response()->json(["message"=>"Data is none"],404);
            $product = Product::firstOrCreate([
                "categoryId"  =>$request->categoryId,
                "productName" =>$request->productName,
                "price"       =>$request->price,
                "quantity"    =>$request->quantity,
                "imageAddress"=>$request->imageAddress,
                "description" =>$request->description,
                "color"       =>$request->color  
            ]);
            $product->save();
            return response()->json(['product'=> $product],200);
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
            if($request == null) return \response()->json(["message"=>"Data is none"]);
            $product = Product::find($id);
            $product->update($request->all());
            return response()->json(['product'=> $product],200);
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
            
            $product = Product::find($id);
            $product->delete();
            return response()->json(['message'=> "Delete successful"],200);
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

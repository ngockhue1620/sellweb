<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware(['auth'])->group(function () {
//     Route::post('product','App\Http\Controllers\ProductController@store');
//     Route::delete('product/{id}','App\Http\Controllers\ProductController@destroy');
// });

//supplier
Route::post('supplier','App\Http\Controllers\SupplierController@store');
Route::get('supplier','App\Http\Controllers\SupplierController@index');
Route::put('supplier/{id}','App\Http\Controllers\SupplierController@update');
Route::delete('supplier/{id}','App\Http\Controllers\SupplierController@destroy');

//category
Route::post('category','App\Http\Controllers\CategoryController@store')->middleware('auth.basic');
Route::get('category','App\Http\Controllers\CategoryController@index');
Route::put('category/{id}','App\Http\Controllers\CategoryController@update')->middleware('auth.basic');
Route::delete('category/{id}','App\Http\Controllers\CategoryController@destroy')->middleware('auth.basic');

//product
Route::post('product','App\Http\Controllers\ProductController@store')->middleware('auth.basic');
Route::get('product','App\Http\Controllers\ProductController@index');
Route::get('out-stock-product','App\Http\Controllers\ProductController@outStockProduct');
Route::put('product/{id}','App\Http\Controllers\ProductController@update')->middleware('auth.basic');
Route::delete('product/{id}','App\Http\Controllers\ProductController@destroy')->middleware('auth.basic');

//customer
Route::post('customer','App\Http\Controllers\CustomerController@store');
Route::post('login','App\Http\Controllers\CustomerController@login');
Route::get('customer','App\Http\Controllers\CustomerController@index');
// Route::get('customer/create','App\Http\Controllers\CustomerController@create');
Route::get('customer/{id}','App\Http\Controllers\CustomerController@show');

Route::put('customer/{id}','App\Http\Controllers\CustomerController@update');
Route::delete('customer/{id}','App\Http\Controllers\CustomerController@destroy');

//in_cart
Route::get('cart','App\Http\Controllers\In_CartController@index');
Route::post('cart','App\Http\Controllers\In_CartController@store');
Route::get('cart/{id}','App\Http\Controllers\In_CartController@show');
// Route::put('cart/{id}','App\Http\Controllers\In_CartController@update');
Route::delete('cart/{id}','App\Http\Controllers\In_CartController@destroy');


//order
Route::post('order','App\Http\Controllers\OrderController@store');

// Route::get('order','App\Http\Controllers\OrderController@index')->middleware('auth.basic');
Route::get('order','App\Http\Controllers\OrderController@index');
Route::get('order/{id}','App\Http\Controllers\OrderController@show');   
Route::put('order/{id}','App\Http\Controllers\OrderController@update');
Route::get('history/{id}','App\Http\Controllers\OrderController@historyOrder');



Route::delete('order/{id}','App\Http\Controllers\OrderController@destroy');

//file

Route::group([
    'prefix' => 'download'
], function() {
    Route::get('/files/{id}','App\Http\Controllers\Api\FileController@download');
});

Route::post('files','App\Http\Controllers\FileController@store');
Route::put('files/{id}','App\Http\Controllers\FileController@update');
Route::delete('files/{id}','App\Http\Controllers\FileController@destroy');
Route::get('files/{id}','App\Http\Controllers\FileController@show');
Route::get('files','App\Http\Controllers\FileController@index');

//order detail
Route::get('order-detail','App\Http\Controllers\Order_DetailController@index');
Route::get('order-detail/{id}','App\Http\Controllers\Order_DetailController@show');

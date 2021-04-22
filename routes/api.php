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

//supplier
Route::post('supplier','App\Http\Controllers\SupplierController@store');
Route::get('supplier','App\Http\Controllers\SupplierController@index');
Route::put('supplier/{id}','App\Http\Controllers\SupplierController@update');
Route::delete('supplier/{id}','App\Http\Controllers\SupplierController@destroy');

//category
Route::post('category','App\Http\Controllers\CategoryController@store');
Route::get('category','App\Http\Controllers\CategoryController@index');
Route::put('category/{id}','App\Http\Controllers\CategoryController@update');
Route::delete('category/{id}','App\Http\Controllers\CategoryController@destroy');

//product
Route::post('product','App\Http\Controllers\ProductController@store');
Route::get('product','App\Http\Controllers\ProductController@index');
Route::put('product/{id}','App\Http\Controllers\ProductController@update');
Route::delete('product/{id}','App\Http\Controllers\ProductController@destroy');

//customer
Route::post('customer','App\Http\Controllers\CustomerController@store');
Route::get('customer','App\Http\Controllers\CustomerController@index');
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
Route::get('order','App\Http\Controllers\OrderController@index');
// Route::put('order/{id}','App\Http\Controllers\CustomerController@update');
Route::delete('order/{id}','App\Http\Controllers\OrderController@destroy');
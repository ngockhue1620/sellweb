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
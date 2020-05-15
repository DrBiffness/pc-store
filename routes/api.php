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

Route::get('/processors', 'ProcessorController@index');
Route::get('/processors/{id}', 'ProcessorController@show');
Route::get('/motherboards', 'MotherboardController@index');
Route::get('/motherboards/{id}', 'MotherboardController@show');
Route::get('/gpus', 'GpuController@index');
Route::get('/gpus/{id}', 'GpuController@show');
Route::get('/types/{name}', 'TypeController@show');

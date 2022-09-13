<?php
// admin
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;


//client


//
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'admin'
], function () {
    Route::resource('product', ProductController::class);
    // api resource category
    Route::resource('category', CategoryController::class);
});

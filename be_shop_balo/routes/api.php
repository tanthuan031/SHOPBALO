<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DiscountController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RatingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\StorageImageController;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'admin'
], function () {
    Route::resource('product', ProductController::class);

    Route::resource('staff', StaffController::class);

    Route::resource('customer', CustomerController::class);
    // api resource category
    Route::resource('category', CategoryController::class);
    Route::resource('order', OrderController::class);
    Route::delete('category/{category}/forgot', [CategoryController::class, 'forgot']);
    // api discounts
    Route::resource('discount', DiscountController::class);
    // api rating
    Route::resource('rating', RatingController::class);
    // api slider
    Route::resource('slider', SliderController::class);
});
Route::get('/storage/{filename}', [StorageImageController::class, 'index']);
<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DiscountController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RatingController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\StorageImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('admin/login', [AuthController::class, 'login']);
Route::post('admin/otp-sendmail', [AuthController::class, 'otpSendMail']);
Route::put('admin/forgot-password', [AuthController::class, 'forgotPassword']);
Route::group([
    'prefix' => 'admin',
    'middleware' => ['auth:sanctum'],
], function () {
    Route::get('me', [AuthController::class, 'getMe']);
    Route::resource('product', ProductController::class);
    Route::resource('staff', StaffController::class);

    Route::resource('customer', CustomerController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('order', OrderController::class);
    Route::delete('category/{category}/forgot', [CategoryController::class, 'forgot']);
    Route::resource('discount', DiscountController::class);
    Route::resource('rating', RatingController::class);
    Route::post('logout', [AuthController::class, 'logout']);
});
Route::get('/storage/{filename}', [StorageImageController::class, 'index']);

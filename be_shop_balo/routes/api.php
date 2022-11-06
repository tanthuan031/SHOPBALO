<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DiscountController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RatingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Admin\StatisticController;
use App\Http\Controllers\Admin\StorageImageController;
use App\Http\Controllers\Client\AuthClientController;
use App\Http\Controllers\Client\CategoryController as ClientCategoryController;
use App\Http\Controllers\Client\ProductController as ClientProductController;
use App\Http\Controllers\Client\RatingController as ClientRatingController;
use App\Http\Controllers\Client\SliderController as ClientSliderController;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('admin/login', [AuthController::class, 'login']);
Route::post('admin/otp-sendmail', [AuthController::class, 'otpSendMail']);
Route::put('admin/forgot-password', [AuthController::class, 'forgotPassword']);
Route::group([
    'prefix' => 'admin',
    // 'middleware' => ['auth:sanctum'],
], function () {
    Route::get('me', [AuthController::class, 'getMe']);
    Route::resource('product', ProductController::class);
    Route::resource('staff', StaffController::class);
    Route::resource('customer', CustomerController::class);
    // api resource category
    Route::resource('category', CategoryController::class);
    Route::resource('order', OrderController::class);
    Route::delete('category/{category}/forgot', [CategoryController::class, 'forgot']);
    Route::resource('discount', DiscountController::class);
    Route::resource('rating', RatingController::class);
    Route::post('logout', [AuthController::class, 'logout']);
    // api statistics
    Route::prefix('statistics')->group(function () {
        Route::get('order-today', [StatisticController::class, 'figureOrderToday']);
        Route::get('revenue-today', [StatisticController::class, 'figureRevenueToday']);
        Route::get('newcustomer', [StatisticController::class, 'figureNewCustomer']);
        Route::get('order', [StatisticController::class, 'figureOrders']);
        Route::get('revenue', [StatisticController::class, 'figureRevenue']);
        Route::get('staff', [StatisticController::class, 'getTopStaffSelling']);
        Route::get('customer', [StatisticController::class, 'getTopCustomerBuying']);
        Route::get('category-sell', [StatisticController::class, 'getFigureCategorySelling']);
    });
    // api slider
    Route::resource('slider', SliderController::class);
});
Route::get('/storage/{filename}', [StorageImageController::class, 'index']);


// Client

Route::post('client/register', [AuthClientController::class, 'register']);
Route::post('client/login', [AuthClientController::class, 'login']);
Route::put('client/updateprofile/{id}', [AuthClientController::class, 'updateprofile']);
Route::post('client/otp-sendmail', [AuthClientController::class, 'otpSendMailClient']);
Route::put('client/forgot-password', [AuthClientController::class, 'forgotPasswordClient']);

// Route::post('/otp-sendmail', [AuthController::class, 'otpSendMail']);
// Route::put('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::prefix('client')->group(static function () {
    Route::resource('product', ClientProductController::class)->only([
        'index', 'show'
    ]);
    Route::resource('category', ClientCategoryController::class)->only([
        'index', 'show'
    ]);
    Route::resource('rating', ClientRatingController::class)->only([
        'index', 'show', 'store'
    ]);
    Route::resource('slider', ClientSliderController::class)->only([
        'index', 'show'
    ]);
});

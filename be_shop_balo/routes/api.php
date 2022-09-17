<?php
// admin
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StorageImageController;
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
    // api resource category
    Route::resource('category', CategoryController::class);
    // api category forgot
    Route::delete('category/{category}/forgot', [CategoryController::class, 'forgot']);
});
Route::get('/storage/{filename}', [StorageImageController::class, 'index']);

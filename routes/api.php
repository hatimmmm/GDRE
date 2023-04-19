<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController as ApiAuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Routing\RouteGroup;

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

Route::middleware('auth:sanctum')->group(function(){
    Route::apiResource('users',UserController::class);
    Route::post('/logout', [ApiAuthController::class, 'logout']);
    
});
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard',[DashboardController::class,'redirect'])->name('dashboard');
});    
Route::post('/login', [ApiAuthController::class, 'login']);


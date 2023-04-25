<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController as ApiAuthController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DossierController;
use App\Http\Controllers\EmpruntController;
use App\Http\Controllers\EmprunteurController;
use App\Http\Controllers\EntiteVersanteController;
use App\Http\Controllers\SousDossierController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VersementController;


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
    
});
Route::post('/logout', [ApiAuthController::class, 'logout']);
    Route::apiResource('emprunteurs',EmprunteurController::class);
    Route::apiResource('entiteVersantes',EntiteVersanteController::class);
    Route::apiResource('articles',ArticleController::class);
    Route::apiResource('users',UserController::class);
    Route::apiResource('emprunts',EmpruntController::class);
    Route::apiResource('versements',VersementController::class);
    Route::apiResource('dossiers',DossierController::class);
    Route::apiResource('sousDossiers',SousDossierController::class);





Route::post('/login', [ApiAuthController::class, 'login']);


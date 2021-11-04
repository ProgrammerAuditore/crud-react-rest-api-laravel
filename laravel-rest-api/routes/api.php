<?php

use App\Http\Controllers\API\StudentController;

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

/*Parametro: '<ruta api>', [<Controlador>, <función>] */
Route::post('/add-student', [StudentController::class, 'store']);

Route::get('/students', [StudentController::class, 'index']);

Route::get('/edit-student/{id}', [StudentController::class, 'edit']);

Route::put('update-student/{id}', [StudentController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//method get
Route::get('/animals', [AnimalController::class, 'index']);

Route::get('/students', [StudentController::class, 'index']);


//method post
Route::post('/animals', [AnimalController::class, 'store']);

Route::post('/students', [StudentController::class, 'store']);

//method put
Route::put('/animals/{id}', [AnimalController::class, 'update']);

Route::put('/students/{id}', [StudentController::class, 'update']);

//method delete
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);

Route::delete('/students/{id}', [StudentController::class, 'destroy']);

// menampilkan detail resource
Route::get('students/{id}', [StudentController::class,'show']);
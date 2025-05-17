<?php

use App\Http\Controllers\PublicationController;
use Illuminate\Support\Facades\Route;

Route::post('/publication', [PublicationController::class, 'store']);
Route::get('/publication', [PublicationController::class, 'index']);
Route::delete('/publication/{id}', [PublicationController::class, 'destroy']);
Route::put('/publication/{id}', [PublicationController::class, 'update']);



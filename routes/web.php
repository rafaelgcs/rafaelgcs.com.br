<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
Route::post('/contact', [PortfolioController::class, 'contact'])->name('portfolio.contact');
Route::get('/sitemap.xml', function () {
    $path = public_path('sitemap.xml');
    return response()->file($path, ['Content-Type' => 'application/xml; charset=UTF-8']);
})->name('portfolio.sitemap');

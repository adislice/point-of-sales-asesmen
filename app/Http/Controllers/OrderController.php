<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $products = Menu::latest()->get();
        return Inertia::render('CreateOrder', [
            'products' => $products
        ]);
    }
}

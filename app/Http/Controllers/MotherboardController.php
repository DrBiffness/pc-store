<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MotherboardView;

class MotherboardController extends Controller
{
    //
    public function index() {
        $motherboards = MotherboardView::all();
        return response()->json($motherboards);
    }

    public function show($id) {
        $motherboard = MotherboardView::findOrFail($id);
        return response()->json($motherboard);
    }
}

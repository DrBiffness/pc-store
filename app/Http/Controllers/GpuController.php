<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gpu;

class GpuController extends Controller
{
    //
    public function index() {
        $gpus = Gpu::all();
        return response()->json($gpus);
    }

    public function show($id) {
        $gpu = Gpu::findOrFail($id);
        return response()->json($gpu);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProcessorView;

use function GuzzleHttp\json_decode;

class ProcessorController extends Controller
{
    //

    // public function index()
    // {
    //     $processors = Processor::all();

    //     return response()->json($processors);
    // }

    public function index() {
        $procs = ProcessorView::all();
        return response()->json($procs);
    }

    public function show($id) {
        $processor = ProcessorView::findOrFail($id);

        return response()->json($processor);
    }
}

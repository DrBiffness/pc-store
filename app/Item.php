<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //
    public $timestamps = false;

    public function processor() {
        return $this->belongsTo('App\Processor', 'id');
    }

    public function motherboard() {
        return $this->belongsTo('App\Motherboard', 'id');
    }
}

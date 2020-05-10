<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Motherboard extends Model
{
    //
    public $timestamps = false;

    public function item() {
        return $this->hasOne('App\Item', 'id');
    }
}

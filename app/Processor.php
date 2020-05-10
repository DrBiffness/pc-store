<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Processor extends Model
{
    //
    public $timestamps = false;

   public function item() {
       return $this->hasOne('App\Item', 'id');
   }
}

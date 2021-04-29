<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InCart extends Model
{
    protected $table ="in_carts";
    protected $fillable =['id','customer_id','productId'];

    public function product(){
    	return $this->belongsTo('App\Models\Product','productId');
    }
    public function customer(){
    	return $this->belongsTo('App\Models\Customer','customer_id');
    }
}

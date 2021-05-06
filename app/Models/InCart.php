<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InCart extends Model
{
    protected $table ="in_carts";
    protected $fillable =['id','customer_id','product_id'];

    public function product(){
    	return $this->belongsTo('App\Models\Product','product_id');
    }
    public function customer(){
    	return $this->belongsTo('App\Models\Customer','customer_id');
    }
}

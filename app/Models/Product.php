<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['id','productName','categoryId','price','quantity','imageAddress','color','description'];
    public function supplier(){
    	return $this->belongsTo('App\Models\Category','categoryId');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    protected $table = 'categories';
    protected $fillable = ['id','categoryName'];
    // public function supplier(){
    // 	return $this->belongsTo('App\Models\Supplier','supplierId');
    // }
    public function product(){
    	return $this->hasMany('App\Models\Product','category_id');
    }
}

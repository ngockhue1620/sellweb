<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    protected $table = 'categories';
    protected $fillable = ['id','categoryName','supplierId'];
    public function supplier(){
    	return $this->belongsTo('App\Models\Supplier','supplierId');
    }
}

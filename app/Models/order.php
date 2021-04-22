<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table='orders';
    protected $fillable=['id','customerId'];

    public function orderDetail()
    {
        return $this->hasMany('App\Models\OrderDetail','order_Id');
    }
    
}

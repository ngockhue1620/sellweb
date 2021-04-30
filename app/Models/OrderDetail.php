<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $table ='order_details';
    protected $fillable =['id','order_id','productId','quantity','price','total'];
}

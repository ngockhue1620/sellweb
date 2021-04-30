<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table ='customers';
    protected $fillable =['id','customerName','phone','email','password'];
    public function getIncart()
    {
        return $this->hasMany('App\Models\InCart','customer_id');
    }

}

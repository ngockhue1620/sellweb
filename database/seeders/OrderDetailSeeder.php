<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class OrderDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * protected $fillable =['id','order_Id','productId','quantity','price','total'];
     */
    public function run()
    {
        DB::table('order_details')->insert([
            [
                'id' =>1,
                'order_Id'   =>1,
                'productId'=>1,
                'quantity'   =>1,
                'price'      =>350000,
                'total'      =>350000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                'id' =>2,
                'order_Id'   =>2,
                'productId'=>2,
                'quantity'   =>1,
                'price'      =>150000,
                'total'      =>150000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                'id' =>3,
                'order_Id'   =>3,
                'productId'=>3,
                'quantity'   =>1,
                'price'      =>50000,
                'total'      =>50000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                'id' =>4,
                'order_Id'   =>4,
                'productId'=>4,
                'quantity'   =>1,
                'price'      =>499000,
                'total'      =>499000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                'id' =>5,
                'order_Id'   =>5,
                'productId'=>5,
                'quantity'   =>1,
                'price'      =>550000,
                'total'      =>550000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            
        ]);
    }
}

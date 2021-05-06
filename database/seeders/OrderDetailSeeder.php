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
     * protected $fillable =[er_id','product_id','quantity','price','total'];
     */
    public function run()
    {
        DB::table('order_details')->insert([
            [
                
                'order_id'   =>1,
                'product_id'=>1,
                'quantity'   =>1,
                'price'      =>350000,
                'total'      =>350000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                
                'order_id'   =>2,
                'product_id'=>2,
                'quantity'   =>1,
                'price'      =>150000,
                'total'      =>150000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                
                'order_id'   =>3,
                'product_id'=>3,
                'quantity'   =>1,
                'price'      =>50000,
                'total'      =>50000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                
                'order_id'   =>4,
                'product_id'=>4,
                'quantity'   =>1,
                'price'      =>499000,
                'total'      =>499000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            [
                
                'order_id'   =>5,
                'product_id'=>5,
                'quantity'   =>1,
                'price'      =>550000,
                'total'      =>550000,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')                
            ],
            
        ]);
    }
}
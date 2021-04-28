<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class InCartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('in_carts')->insert([
            [
                'customerId' =>1,
                'productId'  =>1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                'customerId' =>2,
                'productId'  =>1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                'customerId' =>3,
                'productId'  =>5,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ]);

    }
}

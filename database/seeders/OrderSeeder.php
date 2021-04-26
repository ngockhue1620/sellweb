<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            [
                'id' =>1,
                'customerId'=>1,
            ],
            [
                'id' =>2,
                'customerId'=>2,
            ],
            [
                'id' =>3,
                'customerId'=>3,
            ],
            [
                'id' =>4,
                'customerId'=>4,
            ],
            [
                'id' =>5,
                'customerId'=>5,
            ],
        ]);
    }
}

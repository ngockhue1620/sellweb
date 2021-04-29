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
                
                'customerId'=>1,
                'recipientPhone'=>'1234312345',
                'recipientName'=>'dao ngoc khue',
                'recipientAddress'=>"234/4 ton duc thang",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customerId'=>2,
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customerId'=>3,
                'customerId'=>2,
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customerId'=>4,
                'customerId'=>2,
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customerId'=>5,
                'customerId'=>2,
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ]);
    }
}

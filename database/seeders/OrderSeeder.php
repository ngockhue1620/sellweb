<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return vo_id
     */
    public function run()
    {
        DB::table('orders')->insert([
            [
                
                'customer_id'=>1,
                'recipientPhone'=>'1234312345',
                'recipientName'=>'dao ngoc khue',
                'recipientAddress'=>"234/4 ton duc thang",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customer_id'=>2,
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customer_id'=>3,
                
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customer_id'=>4,
                
                'recipientPhone'=>'6754312345',
                'recipientName'=>'nguyen van a',
                'recipientAddress'=>"234/4 ton dan",
                'note'=>"giao truoc 5 ngay",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customer_id'=>5,
                                
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
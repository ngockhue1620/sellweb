<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->insert([
            [   
                
                'customerName' =>'Đào Ngọc Khuê',
                'phone'        =>'0123456789',
                'email'        =>'ngockhuentca2k@gmail.com',
                'password'     =>'123',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                
                'customerName' =>'Phan Thanh Hoang Long',
                'phone'        =>'0321456789',
                'email'        =>'hoanglong@gmail.com',
                'password'     =>'345',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                
                'customerName' =>'Lưu Kim Hoàng',
                'phone'        =>'0341256789',
                'email'        =>'kimhoangluu@gmail.com',
                'password'     =>'567',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                
                'customerName' =>'Dương Quốc Lâm',
                'phone'        =>'0214567896',
                'email'        =>'DuongLamDongNai@gmail.com',
                'password'     =>'542',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                
                'customerName' =>'Huỳnh Văn Sang',
                'phone'        =>'09876321345',
                'email'        =>'sangheo@gmail.com',
                'password'     =>'1232',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ]);
    }
}
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [   

                'id'    =>1,
                'categoryName' =>'Quần áo thể thao',
                'supplierId'   =>1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'id'    =>2,
                'categoryName' =>'Đồng phục',
                'supplierId'   =>2,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'id'    =>3,
                'categoryName' =>'Thời trang nam',
                'supplierId'   =>3,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'id'    =>4,
                'categoryName' =>'Thời trang nữ',
                'supplierId'   =>3,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'id'    =>5,
                'categoryName' =>'Áo sơ mi ',
                'supplierId'   =>4,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'id'    =>6,
                'categoryName' =>'Quần Rin',
                'supplierId'   =>5,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ]);
    }
}

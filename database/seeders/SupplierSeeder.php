<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('suppliers')->insert([
            [   

                
                'supplierName' =>'Công ty thời trang Maison',
                'address'      =>'142/4 Bàu Cát 2, P.12, Q. Tân Bình Tp. Hồ Chí Minh (TPHCM), Việt Nam',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                
                'supplierName' =>'May Mặc Trường Nam - Công Ty TNHH Sản Xuất TMDV Trường Nam',
                'address'      =>'63/12 Đỗ Nhuận, P. Sơn Kỳ, Q. Tân Phú, Tp. Hồ Chí Minh (TPHCM), Việt Nam',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],  
            [   
                
                'supplierName' =>'Đồng Phục Ngọc Phú - Công Ty TNHH Sản Xuất Thương Mại Ngọc Phú',
                'address'      =>'358/15 Bình Long, Phường Phú Thọ Hoà, Quận Tân Phú, Tp. Hồ Chí Minh (TPHCM), Việt Nam',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                
                'supplierName' =>'Đồng Phục Bảo Duyên - Doanh Nghiệp Tư Nhân Bảo Duyên',
                'address'      =>'Số 15B, Cư Xá Lý Thường Kiệt, P. 7, Q. 10, Tp. Hồ Chí Minh (TPHCM), Việt Nam',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                
                'supplierName' =>'Công Ty TNHH Mỹ Anh',
                'address'      =>'Km 18.5 QL 32, X. Đức Thượng, Hoài Đức, Hà Nội, Việt Nam',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ]);
    }
}

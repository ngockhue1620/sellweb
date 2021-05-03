<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * [Name','category_id','price','quantity','imageAddress','color','description'];
     */
    public function run()
    {
        DB::table('products')->insert([
            [   
                'productName' =>'Bộ Đồ Tập Quần Short + Ngắn Tay Butz',
                'category_id'  =>1,
                'price'       =>350000,
                'quantity'    =>50,
                'imageAddress'=>'https://likefit.vn/wp-content/uploads/2020/07/snb2.jpg',
                'color'       =>'Đen',
                'description' =>'Bộ đồ quần short + Ngắn tay Butz. Form ôm, vải co dãn 4 chiều, lên form tôn dáng thoải mái tập luyện',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'Áo Ba Lỗ – Tank Top CRNS',
                'category_id'  =>1,
                'price'       =>150000,
                'quantity'    =>20,
                'imageAddress'=>'https://likefit.vn/wp-content/uploads/2020/07/11155955490_1603545263.jpg',
                'color'       =>'Đen',
                'description' =>'– Form dáng: Form cắt xẻ tank top, xẻ ngang sườn, form mặc rộng thoải mái, không ôm <br>  Chất vải: Áo vải Cotton 100%, thấm mồ hôi, co dãn 4 chiều, không bai xù',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'ĐỒNG PHỤC ÁO THUN – ÁO THUN CỔ TRỤ MÀU ĐEN TAY NGẮN 02',
                'category_id'  =>2,
                'price'       =>50000,
                'quantity'    =>100,
                'imageAddress'=>'https://dongphuctanbinh.com/wp-content/uploads/2018/11/09-3-400x600.jpg',
                'color'       =>'Đen',
                'description' =>'Chất liệu: Theo yêu cầu của khách hàng.Kiểu dáng phong phú, thời trang,đẹp, tiện dụng.',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'ĐỒNG PHỤC NHÀ HÀNG KHÁCH SẠN',
                'category_id'  =>2,
                'price'       =>499000,
                'quantity'    =>50,
                'imageAddress'=>'https://dongphuctanbinh.com/wp-content/uploads/2019/06/dong-phuc-quan-ly-khach-san-mau-06-6475_HasThumb-400x600.jpg',
                'color'       =>'Trắng',
                'description' =>'Theo yêu cầu của khách hàng.Kiểu dáng phong phú, thời trang,đẹp, tiện dụng.',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'ÁO POLO NAM ARISTINO APS035S1',
                'category_id'  =>3,
                'price'       =>550000,
                'quantity'    =>50,
                'imageAddress'=>'https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps035s1/ao-polo-nam-aristino-APS035S1-14x500x500x4.jpg',
                'color'       =>'Nâu nhạt',
                'description' =>'- Áo polo phom Slim Fit ôm nhẹ tôn dáng mà đảm bảo sự thoải mái khi vận động.<br>
                - Áo cổ đứng lịch sự với kiểu dệt jacquard đường line kẻ nhỏ tạo điểm nhấn tinh tế. Thiết kế basic kết hợp màu sắc nam tính giúp áo dễ dàng kết hợp với các trang phục khác',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'ÁO SƠ MI NAM THỜI TRANG GEREFL DÀI TAY',
                'category_id'  =>3,
                'price'       =>570000,
                'quantity'    =>40,
                'imageAddress'=>'https://img.alicdn.com/imgextra/i4/1999887296/O1CN01yjvNsc23lcHO7KSDe_!!0-item_pic.jpg',
                'color'       =>'Caro',
                'description' =>'ÁO SƠ MI NAM THỜI TRANG GEREFL DÀI TAY NGẮN TAY KẺ CARO MÙA HÈ PHONG CÁCH HÀN QUỐC THỜI TRANG NAM CHẤT LIỆU HÀNG QUẢNG CHÂU CAO CẤP G01',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'Đầm Váy Sơ Mi Cổ Đức Cao Cấp',
                'category_id'  =>4,
                'price'       =>250000,
                'quantity'    =>40,
                'imageAddress'=>'https://w.ladicdn.com/s650x800/5cb1e5c5e0b1531913bd7a70/dam-so-mi-trung-nien-20201002024854.jpg',
                'color'       =>'Hồng',
                'description' =>'ĐẦM CỔ ĐỨC THẮT ĐAI NƠ| VH03 . Sản phẩm thiết kế cao cấp đem lại sự tự tin thoải mái với thiết kế NỮ TÍNH - TRẺ TRUNG, màu sắc hài hòa phù hợp với tất cả mọi người.',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'Đầm bút chì kẻ nơ vai',
                'category_id'  =>4,
                'price'       =>420000,
                'quantity'    =>60,
                'imageAddress'=>'https://hhluxury.vn/storage/images/GMlsdFwVSPwramV3juoNgPfXANjJKt0pjqeJTHDh.jpg',
                'color'       =>'',
                'description' =>'Đầm Công sở - Đầm bút chì kẻ nơ vai',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                'productName' =>'ĐỒNG PHỤC CÔNG SỞ – ÁO SƠ MI NAM DÀI TAY MÀU TRẮNG ',
                'category_id'  =>5,
                'price'       =>200000,
                'quantity'    =>60,
                'imageAddress'=>'https://dongphuctanbinh.com/wp-content/uploads/2018/11/09-9-400x600.jpg',
                'color'       =>'Trắng',
                'description' =>'Cắt hàng kỹ, may đẹp, bền chắc.',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [
                            
                'productName' =>'ÁO SƠ MI NỮ MÀU TRẮNG TAY DÀI PHỐI SỌC ĐEN',
                'category_id'  =>5,
                'price'       =>150,
                'quantity'    =>200000,
                'imageAddress'=>'https://dongphuctanbinh.com/wp-content/uploads/2019/04/may-dong-phuc-ao-so-mi-cong-so-cao-cap-tai-binh-duong-5489-2016-09-07-1-400x600.jpg',
                'color'       =>'Trắng,Đen',
                'description' =>'Theo yêu cầu của khách hàng.Kiểu dáng phong phú, thời trang,đẹp, tiện dụng',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
            [   
                            
                'productName' =>'Quần Rin Nam',
                'category_id'  =>6,
                'price'       =>175000,
                'quantity'    =>45,
                'imageAddress'=>'https://media3.scdn.vn/img4/2020/05_08/ITXYrrwjcTs9IBoIFAii_simg_de2fe0_500x500_maxb.jpg',
                'color'       =>'Xanh',
                'description' =>'Một trong những item siêu đẹp, siêu hot của shop với màu sắc nam tính, mang nét năng động. Đường nét gãy gọn, chỉ may chắn chắn, tỉ mỉ, cách điệu.',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],

        ]);
    }
}
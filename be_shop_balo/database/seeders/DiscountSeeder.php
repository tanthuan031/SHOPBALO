<?php

namespace Database\Seeders;

use App\Models\Discount;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiscountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data=[
            [
                'id'=>1,
                'name'=>'Giảm 50%',
                'value'=>50,
                'status'=>true,
                'point'=>5,
                'description'=>'Chỉ áp dụng từ ngày 20/10 đên 20/11 trong năm 2022.'
            ],
            [
                'id'=>2,
                'name'=>'Mua một tặng một',
                'value'=>0,
                'status'=>true,
                'point'=>5,
                'description'=>'Chỉ áp dụng cho các sản phẩm có giá trị từ 200.000 VNĐ trở lên .'
            ],
            [
                'id'=>3,
                'name'=>'Giảm giá cho một nhóm đối tượng nhất định đặc biệt',
                'value'=>30,
                'status'=>true,
                'point'=>5,
                'description'=>'Chỉ áp dụng cho các sản phẩm có giá trị thấp hơn 100.000 VNĐ .'
            ],
            [
                'id'=>4,
                'name'=>'Flash sale',
                'value'=>70,
                'status'=>true,
                'point'=>5,
                'description'=>'Chỉ áp dụng trong các khung giờ như sau 9h-12h,16h-18h,Lưu ý: Khuyến mãi này chỉ sử dụng trong ngày 25/12/2022.'
            ],
            [
                'id'=>5,
                'name'=>'Miễn phí vận chuyển và hoàn lại (đổi trả hàng) miễn phí',
                'value'=>10,
                'status'=>true,
                'point'=>15,
                'description'=>'Chỉ áp dụng cho các dịch vụ tính toán qua MoMo,ZaloPay,PayPal,Amazon Pay.'
            ],
        ];
        foreach($data as $item){

            DB::table('discounts')->insert([
                'name' => $item['name'],
                'value' =>  $item['value'],
                'status' =>  $item['status'],
                'point' =>  $item['point'],
                'description' =>  $item['description'],
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}

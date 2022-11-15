<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Rating;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        sleep(1);
        $products=DB::table('products')->get()->toArray();
        $data=[
                [
                    'id'=>1,
                    'point'=>4,
                    'status'=>'pushlished',
                    'content'=>'thích cựcccccccc, lần sau sẽ ghé shop! túi đẹp mà giá lại siêu rẻ còn giao nhanh nữaaa hơi bị thích luôn á'
                ],
                [
                    'id'=>2,
                    'point'=>5,
                    'status'=>'pushlished',
                    'content'=>'Đã nhận được sản phẩm,đóng gói cẩn thận,giao hàng nhanh,giao đúng sản phẩm,đủ số lượng,màu sắc như trong đơn hàng mình đã đặt,giá cả cũng hợp lý,mình rất hài lòng,lần tới nhất định mình sẽ tiếp tục ủng hộ shop,xin tặng cho shop 10sao..!'
                ],
                [
                    'id'=>3,
                    'point'=>5,
                    'status'=>'pushlished',
                    'content'=>'Balo xinh lắm ạaaaaaaa
                    Shop cskh rất tốttttttttttttr
                    5 sao nháaaaaaaaaaaaaaaaaaaaaaaaa'
                ],
                [
                    'id'=>4,
                    'point'=>5,
                    'status'=>'pushlished',
                    'content'=>'túi xinh lắm nha mọi người.........mọi người nên mua nha............................'
                ],
                [
                    'id'=>5,
                    'point'=>5,
                    'status'=>'pushlished',
                    'content'=>'túi xinh, chất da đẹp, k bị mùi hôi. màu đẹp như ảnh. ...........................................'
                ]
        ];
        foreach($data as $key=> $item){
            DB::table('ratings')->insert([
                'customer_id'=>Customer::all()->random()->id,
                'product_id'=>$products[$key]->id,
                'point'=>$item['point'],
                'status'=>$item['status'],
                'content'=>$item['content'],
                'image'=>$products[$key]->image,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}

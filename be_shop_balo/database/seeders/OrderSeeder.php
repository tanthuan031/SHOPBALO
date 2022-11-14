<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        sleep(2);
        $customers=DB::table('customers')->limit(10)->get()->toArray();
        $staffs=DB::table('staffs')->limit(10)->get()->toArray();
        $discounts=DB::table('discounts')->limit(10)->get()->toArray();

        $data=[
                [
                    'id'=>1,
                    'status'=>1,
                    'total_price'=>12000,
                    'created_order_date'=>date('Y-m-d H:i:s'),
                    'order_detail'=>[

                    ]
                ]
        ];
        foreach($data as $key=> $item){
            DB::table('orders')->insert([
                'customer_id'=> $customers[$key]['id'],
                'staff_id'=>$staffs[$key]['id'],
                'discount_id'=>@$discounts[$key]['id'] ?? $discounts[0]['id'],
                'status'=>$item['status'],
                'discount_value'=>@$discounts[$key]['value'] ?? $discounts[0]['value'],
                'total_price'=>$item['total_price'] * ($key+1),
                'created_order_date'=>$item['created_order_date'],
            ]);
            foreach($item['order_detail'] as $orderDetail){
                DB::table('orders_detail')->insert([
                   
                ]);
                
            }
        }
        // DB::table('orders')->insert([
        //     ['id' => 1, 'customer_id' => 1,'staff_id'=>1,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 350000,'created_order_date'=>date('Y-m-d H:i:s'),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 2, 'customer_id' => 2,'staff_id'=>2,'discount_id'=>2, 'status' => 1, 'discount_value' => 0, 'total_price' => 285000,'created_order_date'=>date('Y-m-d', strtotime('+2 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 3, 'customer_id' => 3,'staff_id'=>3,'discount_id'=>3, 'status' => 1, 'discount_value' => 0, 'total_price' => 330000,'created_order_date'=>date('Y-m-d', strtotime('-2 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 4, 'customer_id' => 4,'staff_id'=>4,'discount_id'=>4, 'status' => 1, 'discount_value' => 0, 'total_price' => 450000,'created_order_date'=>date('Y-m-d', strtotime('-3 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 5, 'customer_id' => 5,'staff_id'=>5,'discount_id'=>5, 'status' => 1, 'discount_value' => 0, 'total_price' => 525000,'created_order_date'=>date('Y-m-d', strtotime('-4 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 6, 'customer_id' => 6,'staff_id'=>2,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 675000,'created_order_date'=>date('Y-m-d', strtotime('-5 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 7, 'customer_id' => 5,'staff_id'=>1,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 355000,'created_order_date'=>date('Y-m-d', strtotime('-4 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 8, 'customer_id' => 2,'staff_id'=>4,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 750000,'created_order_date'=>date('Y-m-d', strtotime('-6 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 9, 'customer_id' => 3,'staff_id'=>3,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 380000,'created_order_date'=>date('Y-m-d', strtotime('-8 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 10, 'customer_id' => 1,'staff_id'=>4,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 600000,'created_order_date'=>date('Y-m-d', strtotime('-8 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 11, 'customer_id' => 3,'staff_id'=>3,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 380000,'created_order_date'=>date('Y-m-d', strtotime('-8 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 12, 'customer_id' => 9,'staff_id'=>2,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 610000,'created_order_date'=>date('Y-m-d', strtotime('-9 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 13, 'customer_id' => 2,'staff_id'=>3,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 340000,'created_order_date'=>date('Y-m-d', strtotime('-10 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 14, 'customer_id' => 8,'staff_id'=>5,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 600000,'created_order_date'=>date('Y-m-d', strtotime('-11 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 15, 'customer_id' => 3,'staff_id'=>3,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 380000,'created_order_date'=>date('Y-m-d', strtotime('-7 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 16, 'customer_id' => 5,'staff_id'=>2,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 610000,'created_order_date'=>date('Y-m-d', strtotime('-9 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 17, 'customer_id' => 2,'staff_id'=>3,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 375000,'created_order_date'=>date('Y-m-d', strtotime('-12 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 18, 'customer_id' => 6,'staff_id'=>1,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 495000,'created_order_date'=>date('Y-m-d', strtotime('-10 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 19, 'customer_id' => 3,'staff_id'=>3,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 380000,'created_order_date'=>date('Y-m-d', strtotime('-8 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 20, 'customer_id' => 8,'staff_id'=>5,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 610000,'created_order_date'=>date('Y-m-d', strtotime('-11 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 21, 'customer_id' => 6,'staff_id'=>4,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 375000,'created_order_date'=>date('Y-m-d', strtotime('-15 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
        //     ['id' => 22, 'customer_id' => 9,'staff_id'=>1,'discount_id'=>1, 'status' => 1, 'discount_value' => 0, 'total_price' => 495000,'created_order_date'=>date('Y-m-d', strtotime('-5 day')),'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],


        // ]);
    }
}

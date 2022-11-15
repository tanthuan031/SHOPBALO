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
        $staffs=DB::table('staff')->limit(10)->get()->toArray();
        $discounts=DB::table('discounts')->limit(10)->get()->toArray();
        $products=DB::table('products')->limit(10)->get()->toArray();

        $data=[
                [
                    'id'=>1,
                    'status'=>1,
                    'total_price'=>12000,
                    'created_order_date'=>date('Y-m-d H:i:s'),
                    'order_detail'=>[

                        ]
                ],
                [
                        'id'=>2,
                        'status'=>1,
                        'total_price'=>56000,
                        'created_order_date'=>date('Y-m-d H:i:s'),
                        'order_detail'=>[
    
                        ]
                ],
                [
                        'id'=>3,
                        'status'=>1,
                        'total_price'=>34000,
                        'created_order_date'=>date('Y-m-d H:i:s'),
                        'order_detail'=>[
    
                        ]
                ],[
                        'id'=>4,
                        'status'=>1,
                        'total_price'=>12000,
                        'created_order_date'=>date('Y-m-d H:i:s'),
                        'order_detail'=>[
    
                            ]
                ],[
                    'id'=>5,
                    'status'=>1,
                    'total_price'=>56000,
                    'created_order_date'=>date('Y-m-d H:i:s'),
                    'order_detail'=>[

                    ]
                ],[
                    'id'=>6,
                    'status'=>1,
                    'total_price'=>34000,
                    'created_order_date'=>date('Y-m-d H:i:s'),
                    'order_detail'=>[

                    ]
                ]
        ];
        
        if(!is_null($products)){
            foreach($products as $key=> $item){
              
            
               !isset($data[$key]['order_detail']) ? "": array_push($data[$key]['order_detail'],empty($products[$key]->id) ? $products[0]->id : $products[$key]->id );
            }
        }
        foreach($data as $key=> $item){
          $id=  DB::table('orders')->insertGetId([
                'customer_id'=> $customers[$key]->id,
                'staff_id'=>$staffs[$key]->id,
                'discount_id'=>@$discounts[$key]->id ?? $discounts[0]->id ,
                'status'=>$item['status'],
                'discount_value'=>@$discounts[$key]->value ?? $discounts[0]->value,
                'total_price'=>$item['total_price'] * ($key+1),
                'created_order_date'=>$item['created_order_date'],
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
           $count= $item['order_detail']==[] ? 1: count($item['order_detail']);

            foreach($item['order_detail'] as $keyOrder=> $orderDetail){
                DB::table('order_details')->insert([
                   'order_id'=>$id,
                   'product_id'=>$keyOrder==0?1:$keyOrder,
                   'amount'=>1,
                   'price'=>($item['total_price'] * ($key+1))/$count,
                   'created_at' => date('Y-m-d H:i:s'),
                   'updated_at' => date('Y-m-d H:i:s'),
                ]);
                
            }
        }
        
    }
}

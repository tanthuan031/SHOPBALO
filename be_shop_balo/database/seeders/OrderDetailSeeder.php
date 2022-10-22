<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('order_details')->insert([
            ['id' => 1, 'order_id'=>1, 'product_id'=>1, 'amount'=>1, 'price'=>250000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 2, 'order_id'=>2, 'product_id'=>2, 'amount'=>1, 'price'=>350000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 3, 'order_id'=>3, 'product_id'=>5, 'amount'=>1, 'price'=>550000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 4, 'order_id'=>4, 'product_id'=>7, 'amount'=>1, 'price'=>350000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 5, 'order_id'=>5, 'product_id'=>8, 'amount'=>1, 'price'=>250000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 6, 'order_id'=>6, 'product_id'=>9, 'amount'=>2, 'price'=>150000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 7, 'order_id'=>7, 'product_id'=>4, 'amount'=>1, 'price'=>350000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 8, 'order_id'=>8, 'product_id'=>5, 'amount'=>1, 'price'=>200000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 9, 'order_id'=>9, 'product_id'=>6, 'amount'=>3, 'price'=>120000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 10, 'order_id'=>13, 'product_id'=>2, 'amount'=>2, 'price'=>180000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 11, 'order_id'=>10, 'product_id'=>1, 'amount'=>1, 'price'=>320000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 12, 'order_id'=>11, 'product_id'=>3, 'amount'=>1, 'price'=>210000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 13, 'order_id'=>12, 'product_id'=>9, 'amount'=>1, 'price'=>185000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 14, 'order_id'=>13, 'product_id'=>15, 'amount'=>2, 'price'=>140000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 15, 'order_id'=>14, 'product_id'=>16, 'amount'=>1, 'price'=>210000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 16, 'order_id'=>15, 'product_id'=>18, 'amount'=>1, 'price'=>200000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 17, 'order_id'=>16, 'product_id'=>12, 'amount'=>1, 'price'=>200000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 18, 'order_id'=>16, 'product_id'=>14, 'amount'=>1, 'price'=>250000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 19, 'order_id'=>16, 'product_id'=>7, 'amount'=>1, 'price'=>250000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 20, 'order_id'=>17, 'product_id'=>2, 'amount'=>1, 'price'=>90000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 21, 'order_id'=>18, 'product_id'=>7, 'amount'=>2, 'price'=>150000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 22, 'order_id'=>11, 'product_id'=>5, 'amount'=>2, 'price'=>125000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 23, 'order_id'=>7, 'product_id'=>8, 'amount'=>1, 'price'=>165000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 24, 'order_id'=>9, 'product_id'=>10, 'amount'=>1, 'price'=>250000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 25, 'order_id'=>5, 'product_id'=>3, 'amount'=>1, 'price'=>200000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 26, 'order_id'=>20, 'product_id'=>17, 'amount'=>2, 'price'=>125000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 27, 'order_id'=>21, 'product_id'=>8, 'amount'=>1, 'price'=>165000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 28, 'order_id'=>19, 'product_id'=>13, 'amount'=>1, 'price'=>230000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 29, 'order_id'=>18, 'product_id'=>2, 'amount'=>1, 'price'=>210000,'deleted_at'=>null , 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],


        ]);
    }
}

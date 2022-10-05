<?php

namespace Database\Seeders;

use App\Models\ProductDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('product_details')->insert([
            ['id' => 1, 'product_id' => 1, 'code_color' => '#ffe00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 2, 'product_id' => 2, 'code_color' => '#ffe00', 'amount' => 30, 'price' => 550000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 3, 'product_id' => 3, 'code_color' => '#ffe00', 'amount' => 20, 'price' => 450000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 4, 'product_id' => 4, 'code_color' => '#efe00', 'amount' => 10, 'price' => 150000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 5, 'product_id' => 5, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 6, 'product_id' => 6, 'code_color' => '#ffe00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 7, 'product_id' => 7, 'code_color' => '#ffe00', 'amount' => 30, 'price' => 550000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 8, 'product_id' => 8, 'code_color' => '#ffe00', 'amount' => 20, 'price' => 450000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 9, 'product_id' => 9, 'code_color' => '#efe00', 'amount' => 10, 'price' => 150000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 10, 'product_id' => 10, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 11, 'product_id' => 11, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 12, 'product_id' => 12, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 13, 'product_id' => 13, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 14, 'product_id' => 14, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 15, 'product_id' => 15, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 16, 'product_id' => 16, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 17, 'product_id' => 17, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 18, 'product_id' => 18, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 19, 'product_id' => 19, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 20, 'product_id' => 20, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],
            ['id' => 21, 'product_id' => 21, 'code_color' => '#sae00', 'amount' => 20, 'price' => 350000, 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')],


        ]);
    }
}

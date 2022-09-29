<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductDetail;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
            ProductDetailSeeder::class,
            RoleSeeder::class,
            StaffSeeder::class,
            DiscountSeeder::class,
            RatingSeeder::class,



        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'id' => 1,
                'name' => 'Tresor Backpack',
                'description' => 'Welcome to the store bag',
                'image_slider' => 'https://balotuixachviet.vn/wp-content/uploads/2022/05/banner-newata-3.jpg',
                'status' => 'Active',
                'url' => 'google.com'
            ],
            [
                'id' => 2,
                'name' => 'Back To School',
                'description' => 'Sale off 65%',
                'image_slider' => 'https://balotuixachviet.vn/wp-content/uploads/2022/05/banner-newata-3.jpg',
                'status' => 'Active',
                'url' => 'google.com'
            ],
            [
                'id' => 3,
                'name' => 'Young',
                'description' => 'Nature',
                'image_slider' => 'https://facebook.com/backtobasic.vn/photos/a.760081820760480/1352592541509402',
                'status' => 'Active',
                'url' => 'google.com'
            ],
            [
                'id' => 4,
                'name' => 'Black Friday',
                'description' => 'Sale off 70%',
                'image_slider' => 'https://facebook.com/backtobasic.vn/photos/a.760081820760480/1352592541509402',
                'status' => 'Active',
                'url' => 'google.com'
            ]
        ];

        foreach ($data as $item) {
            DB::table('sliders')->insert([
                'name' => $item['name'],
                'description' => $item['description'],
                'image_slider' => $item['image_slider'],
                'status' => $item['status'],
                'url' => $item['url']
            ]);
        }
    }
}

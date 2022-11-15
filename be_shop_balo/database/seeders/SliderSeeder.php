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
        $data=[
            [
                'id'=>1,
                'name'=>'slider',
                'description'=>'slider 1',
                'image_slider'=>'https://balotuixachviet.vn/wp-content/uploads/2022/05/banner-newata-3.jpg',
                'status'=>'Active',
                'url'=>'google.com'
            ],
            [
                'id'=>2,
                'name'=>'slider2',
                'description'=>'slider 2',
                'image_slider'=>'https://balotuixachviet.vn/wp-content/uploads/2022/05/banner-newata-3.jpg',
                'status'=>'Active',
                'url'=>'google.com'
            ],  [
                'id'=>3,
                'name'=>'slider3',
                'description'=>'slider 3',
                'image_slider'=>'https://balotuixachviet.vn/wp-content/uploads/2022/05/banner-newata-3.jpg',
                'status'=>'Active',
                'url'=>'google.com'
            ]
        ];

        foreach($data as $item){
            DB::table('sliders')->insert([
                'name'=>$item['name'],
                'description'=>$item['description'],
                'image_slider'=>$item['image_slider'],
                'status'=>$item['status'],
                'url'=>$item['url']
            ]);
        }
    }
}

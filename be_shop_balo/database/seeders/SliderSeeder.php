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
                'name'=>'Tresor Backpack',
                'description'=>'Welcome to the store bag',
                'image_slider'=>'https://balotuixachviet.vn/wp-content/uploads/2022/05/banner-newata-3.jpg',
                'status'=>'Active',
                'url'=>'google.com'
            ],
            [
                'id'=>2,
                'name'=>'Back To School',
                'description'=>'Sale off 65%',
                'image_slider'=>'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/295766956_1962579320607512_4325298332887977376_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XhrVdNMJj-4AX_BelTB&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfCtzNq2ukv_ESRG1KjNhR-OxYwLSSNY-GtprNtTURQ3JQ&oe=63828056',
                'status'=>'Active',
                'url'=>'google.com'
            ],
            [
                'id'=>3,
                'name'=>'Young',
                'description'=>'Nature',
                'image_slider'=>'https://facebook.com/backtobasic.vn/photos/a.760081820760480/1352592541509402',
                'status'=>'Active',
                'url'=>'google.com'
            ],
            [
            'id'=>4,
            'name'=>'Black Friday',
            'description'=>'Sale off 70%',
            'image_slider'=>'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-9/173466833_1615977761934338_3224713917069433639_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=5af5SUWbe1cAX8durH6&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfDOJ8IpM-yClmnkoeOERTHmmokCPRJfGjEn0dgLSG_D8A&oe=63A4060B',
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

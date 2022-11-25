<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
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
                    'name'=>'Manage Product',
                    'status'=>true,
                ],
                 [
                    'id'=>2,
                    'name'=>'Manage Category',
                    'status'=>true,
                ],
                [
                    'id'=>3,
                    'name'=>'Manage Customer',
                    'status'=>true,
                ],
                [
                    'id'=>4,
                    'name'=>'Manage Staff',
                    'status'=>true,
                ],
                [
                    'id'=>5,
                    'name'=>'Manage Reviews',
                    'status'=>true,
                ],
                [
                    'id'=>6,
                    'name'=>'Manage Promotion',
                    'status'=>true,
                ],
                [
                    'id'=>7,
                    'name'=>'Manage Order',
                    'status'=>true,
                ],
                [
                    'id'=>8,
                    'name'=>'Manage WareHouses',
                    'status'=>true,
                ]
                ,[
                    'id'=>9,
                    'name'=>'Statistic Selling',
                    'status'=>true,
                ]
                ,[
                    'id'=>10,
                    'name'=>'Statistic Storage',
                    'status'=>true,
                ],[
                    'id'=>11,
                    'name'=>'Manage UI ',
                    'status'=>true,
                ]


        ];
        foreach($data as $item){
            DB::table('permissions')->insert([
                'name'=>$item['name'],
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}

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
                    'name'=>'',
                    'status'=>true,
                ],
                 [
                    'id'=>2,
                    'name'=>'',
                    'status'=>true,
                ],
                [
                    'id'=>3,
                    'name'=>'',
                    'status'=>true,
                ],
                [
                    'id'=>4,
                    'name'=>'',
                    'status'=>true,
                ],
                [
                    'id'=>5,
                    'name'=>'',
                    'status'=>true,
                ],
                [
                    'id'=>6,
                    'name'=>'',
                    'status'=>true,
                ],
                [
                    'id'=>7,
                    'name'=>'',
                    'status'=>true,
                ],
                [
                    'id'=>8,
                    'name'=>'',
                    'status'=>true,
                ]
                ,[
                    'id'=>9,
                    'name'=>'',
                    'status'=>true,
                ]
                ,[
                    'id'=>10,
                    'name'=>'',
                    'status'=>true,
                ],[
                    'id'=>11,
                    'name'=>'',
                    'status'=>true,
                ]
                ,[
                    'id'=>12,
                    'name'=>'',
                    'status'=>true,
                ]
                ,[
                    'id'=>13,
                    'name'=>'',
                    'status'=>true,
                ]
                ,[
                    'id'=>14,
                    'name'=>'',
                    'status'=>true,
                ],[
                    'id'=>15,
                    'name'=>'',
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

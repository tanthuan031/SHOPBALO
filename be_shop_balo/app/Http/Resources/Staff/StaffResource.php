<?php

namespace App\Http\Resources\Staff;

use Illuminate\Http\Resources\Json\JsonResource;

class StaffResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $arrayData=[
            'id'=>$this->id,
            'role_id'=>$this->role_id,
            'role_name'=>$this->roles->name,
            'first_name'=>$this->first_name,
            'last_name'=>$this->last_name,
            'gender'=>$this->gender,
            'phone'=>$this->phone,
            'email'=>$this->email,
            'password'=>$this->password,
            'avatar'=>$this->avatar,
            'status'=>$this->status,
            'address'=>$this->address,
            'created_date'=>$this->created_date,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,


        ];
        return $arrayData;
    }
}

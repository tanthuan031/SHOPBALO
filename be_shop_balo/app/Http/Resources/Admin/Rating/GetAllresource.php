<?php

namespace App\Http\Resources\Admin\Rating;

use Illuminate\Http\Resources\Json\JsonResource;

class GetAllresource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $products = $this->products;
        $customers = $this->customers;
        return [
            'id' => $this->id,
            'customers' => [
                'id' => $customers->id,
                'last_name' => $customers->last_name,
                'first_name' => $customers->first_name,
                'full_name' => $customers->last_name . ' ' . $customers->first_name,
                'gender' => $customers->gender,
                'phone' => $customers->phone,
                'email' => $customers->email,
                'avatar' => env('APP_URL') . '/storage/Customer/' . $customers->avatar,
                'status' => $customers->status,
                'address' => $customers->address,
                'created_date' => $customers->created_date,
                'created_at' => $customers->created_at,

            ],

            'products' => [
                'id' => $products->id,
                'name' => $products->name,
                'description' => $products->description,
                'status' => $products->status,
                'image' => env('APP_URL') . '/storage/Product/' . $products->image,
                'created_at' => $products->created_at,
            ],
            'point' => $this->point,
            'content' => $this->content,
            'status' => $this->status,
            'image' => env('APP_URL') . '/storage/Rating/' . $this->image,
            'created_date' => $this->created_at,
        ];
    }
}

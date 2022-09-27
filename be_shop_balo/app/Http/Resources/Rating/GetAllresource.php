<?php

namespace App\Http\Resources\Rating;

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
        // dd($this->customers->phone);
        return [
            'id' => $this->id,
            'customers' => $this->customers->only([
                'id', 'last_name', 'first_name',
                'gender', 'phone', 'email',
                'avatar', 'status', 'address',
                'created_date', 'created_at'
            ]),
            'products' => $this->products->only([
                'id',
                'name', 'description',
                'image', 'image_slide',
                'status', 'created_at'
            ]),
            'point' => $this->point,
            'content' => $this->content,
            'image' => env('APP_URL') . '/storage/rating/' . $this->image,
            'created_date' => $this->created_at,
        ];
    }
}

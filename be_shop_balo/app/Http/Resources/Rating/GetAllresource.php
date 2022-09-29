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
        return [
            'id' => $this->id,
            'customer_id' => $this->customers,
            'product_id' => $this->product_id,
            'point' => $this->point,
            'content' => $this->content,
            'image' => env('APP_URL') . '/storage/rating/' . $this->image,
            'created_date' => $this->created_at,
        ];
    }
}

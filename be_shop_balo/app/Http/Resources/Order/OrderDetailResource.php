<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     */
    public function toArray($request): array
    {
        $arrOrderDetail = [
            'order_id' => $this->order_id,
            'product_id' => $this->product_id,
            'product_name' => $this->products->name,
            'amount' => $this->amount,
            'price' => $this->price,

        ];
        return $arrOrderDetail;
    }
}

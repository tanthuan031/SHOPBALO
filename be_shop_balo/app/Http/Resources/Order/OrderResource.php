<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request): array
    {
        $arrayOrder = [
            'order_id' => $this->id,
            'customer_id' => $this->customer_id,
            'customer_firstname' => $this->customers->first_name,
            'customer_lastname' => $this->customers->last_name,
            'staff_id' => $this->staff_id,
            'staff_firstname' => $this->staff->first_name,
            'staff_lastname' => $this->staff->last_name,
            'discount_id' => $this->discount_id,
            'status' => $this->status,
            'discount_value' => $this->discount_value,
            'total_price' => $this->total_price,
        ];
        return $arrayOrder;
    }
}

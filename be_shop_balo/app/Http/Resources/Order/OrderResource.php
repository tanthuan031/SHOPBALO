<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
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
            'created_order_date' => $this->created_order_date,
        ];
        return $arrayOrder;
    }
}

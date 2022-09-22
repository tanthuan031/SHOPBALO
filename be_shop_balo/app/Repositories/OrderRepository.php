<?php

namespace App\Repositories;

use App\Http\Resources\Order\OrderResource;
use App\Models\Order;
use App\Repositories\BaseRepository;


class OrderRepository extends BaseRepository
{
    protected $order;
    protected int $paginate = 10;
    public function __construct(Order $order)
    {
        $this->order = $order;
        parent::__construct($order);
    }
    public function getAllOrder($request)
    {
        $data = Order::query()
            ->with('customers')
            ->with('staff')
            ->with('discounts')
            ->sort($request)
            ->filter($request)
            ->search($request)
            ->paginate($this->paginate);
        return  OrderResource::collection($data)->response()->getData();
    }
}

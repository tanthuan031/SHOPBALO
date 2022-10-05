<?php

namespace App\Repositories;

use App\Http\Resources\Order\OrderDetailResource;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;
use App\Models\OrderDetail;
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
            // ->sort($request)
            // ->filter($request)
            ->search($request)
            ->paginate($this->paginate);
        return OrderResource::collection($data)->response()->getData();
    }

    public function getOrderDetailById($id)
    {
        $data = OrderDetail::query()
            ->where('order_id', $id)
            ->with('products')
            ->get();
        return
            OrderDetailResource::collection($data)->response()->getData();
    }
    public function getOrderById($id)
    {
        $data = Order::query()->find($id);
        return
            OrderResource::make($data);
    }
    public function updateOrder($request, $id)
    {
        $order = Order::query()->where('id', '=', $id)->first();
        if ($order) {
            $order->update($request->all());
            return $order;
        } else {
            return false;
        }
    }
}

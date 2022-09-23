<?php

namespace App\Services;

use App\Http\Traits\ApiResponse;
use App\Repositories\OrderRepository;

class OrderService
{
    use ApiResponse;
    protected OrderRepository $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }
    public function getAllOrder($request)
    {
        $result = $this->orderRepository->getAllOrder($request);
        if ($result) {
            return $this->apiResponse($result, 'success', 'Get order successfully');
        } else {
            return $this->apiResponse([], 'failed', 'Get order unsuccessfully');
        }
    }
    public function getOrderDetailById($id)
    {
        $result = $this->orderRepository->getOrderDetailById($id);
        if ($result) {
            return $this->apiResponse($result, 'success', 'Get order by id successfully');
        } else {
            return $this->apiResponse([], 'failed', 'Get order by id unsuccessfully');
        }
    }
}

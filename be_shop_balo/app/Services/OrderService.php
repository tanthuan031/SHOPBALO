<?php

namespace App\Services;

use App\Http\Traits\ApiResponse;
use App\Repositories\OrderRepository;
use Exception;

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
    public function getOrderDetailById($request, $id)
    {
        if ($request->has('order_details')) {
            $result = $this->orderRepository->getOrderDetailById($id);
            if ($result) {
                return $this->apiResponse($result, 'success', 'Get order detail by id successfully');
            } else {
                return $this->apiResponse([], 'failed', 'Get order detail by id unsuccessfully');
            }
        } else {
            $result = $this->orderRepository->getOrderById($id);
            if ($result) {
                return $this->apiResponse($result, 'success', 'Get order by id successfully');
            } else {
                return $this->apiResponse([], 'failed', 'Get order by id unsuccessfully');
            }
        }
    }
    public function updateOrder($request, $id)
    {
        if (is_null($id)) throw new Exception();;
        $result = $this->orderRepository->updateOrder($request, $id);
        if ($result) {
            return $this->apiResponse($result, 'success', 'Order updated successfully');
        } else {
            return $this->apiResponse([], 'fail', 'Update order unsuccessfully');
        }
    }
}

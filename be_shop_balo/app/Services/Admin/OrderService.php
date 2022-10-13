<?php

namespace App\Services\Admin;

use App\Http\Traits\ApiResponse;
use App\Repositories\Admin\OrderRepository;
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
    public function getFigureOrders($request): \Illuminate\Http\JsonResponse
    {

        $result = $this->orderRepository->getFigureOrders($request);
        $data=[

            'data'=>$result
        ];
        if ($result) {
            return $this->apiResponse($data, 'success', 'Figure order successfully');
        }else
        { return $this->apiResponse([], 'fail', 'Figure order unsuccessfully'); }
    }
    public function getFigureRevenue($request): \Illuminate\Http\JsonResponse
    {

        $result = $this->orderRepository->getFigureRevenue($request);
        $data=[

            'data'=>$result
        ];
        if ($result) {
            return $this->apiResponse($data, 'success', 'Figure order successfully');
        }else
        { return $this->apiResponse([], 'fail', 'Figure order unsuccessfully'); }
    }
    public function getTopStaffSelling($request): \Illuminate\Http\JsonResponse
    {

        $result = $this->orderRepository->getFigureStaffSelling($request);
        $data=[

            'data'=>$result
        ];
        if ($result) {
            return $this->apiResponse($data, 'success', 'Figure order successfully');
        }else
        { return $this->apiResponse([], 'fail', 'Figure order unsuccessfully'); }
    }
    public function getFigureCategorySelling($request): \Illuminate\Http\JsonResponse
    {

        $result = $this->orderRepository->getFigureCategorySelling($request);
        $data=[

            'data'=>$result
        ];
        if ($result) {
            return $this->apiResponse($data, 'success', 'Figure order successfully');
        }else
        { return $this->apiResponse([], 'fail', 'Figure order unsuccessfully'); }
    }

}

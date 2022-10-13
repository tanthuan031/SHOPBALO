<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\Admin\CustomerService;
use App\Services\Admin\OrderService;
use App\Services\Admin\ProductService;
use App\Services\Admin\StaffService;
use Illuminate\Http\Request;

class StatisticController extends Controller
{
    protected  StaffService $staffService;
    protected  OrderService $orderService;
    protected  CustomerService $customerService;
    protected  ProductService $productService;
    public function __construct(StaffService $staffService,OrderService $orderService,CustomerService $customerService,ProductService $productService)
    {
        $this->staffService=$staffService;
        $this->orderService=$orderService;
        $this->customerService=$customerService;
        $this->productService=$productService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function figureOrders(Request $request): \Illuminate\Http\JsonResponse
    {
            return $this->orderService->getFigureOrders($request);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function figureRevenue(Request $request)
    {
            return $this->orderService->getFigureRevenue($request);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTopStaffSelling(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->orderService->getTopStaffSelling($request);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFigureCategorySelling(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->orderService->getFigureCategorySelling($request);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

<?php

namespace App\Services\Product;


use App\Http\Traits\ApiResponse;
use App\Repository\ProductRepository;


class AssignmentService
{
    use apiResponse;

    protected ProductRepository $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function index($request)
    {
    }

    public function store($request)
    {
    }

    public function show($id)
    {
    }
}

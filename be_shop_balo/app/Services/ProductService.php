<?php

namespace App\Services;

use App\Http\Traits\ApiResponse;
use App\Repositories\ProductRepository;

class ProductService
{
    use apiResponse;
    protected ProductRepository $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAllProduct($request)
    {
        $result = $this->productRepository->getAllProduct($request);
        if($result){
            return $this->apiResponse($result,'success','Get all product success');

        }else{
            return $this->apiResponse([],'fail','Get product unsuccessful');
        }
    }

    public function store($request)
    {
        $result=$this->productRepository->storeProduct($request);
        if( $result){
            return $this->apiResponse($result,'success','Create product successfully');
        }else{
            return $this->apiResponse([],'fail','Create product unsuccessful');
        }
    }

    public function showProduct($id)
    {
     $result = $this->productRepository->showProduct($id);
     if($result){
         return $this->apiResponse($result,'success','Show product detail successfully');
     }else{
         return $this->apiResponse([],'fail','Show product detail unsuccessful');
     }
    }

    public function updateProduct($request,$id){
        $result=$this->productRepository->updateProduct($request,$id);
        $this->productRepository->updateProductDetail($request,$id);
        if($result){
            return $this->apiResponse($result,'Success','Update product successfully');
        }else{
            return $this->apiResponse([],'fail','Update product unsuccessful');
        }

    }

}

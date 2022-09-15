<?php

namespace App\Services;

use App\Http\Traits\ApiResponse;
use App\Repositories\StaffRepository;

class StaffService
{
    use apiResponse;
    protected StaffRepository $staffRepository;

    public function __construct(StaffRepository $staffRepository)
    {
        $this->staffRepository = $staffRepository;
    }

    public function getAllStaff()
    {

        $result = $this->staffRepository->getAllStaff();
        if($result){
            return $this->apiResponse($result,'success','Get all staff success');

        }else{
            return $this->apiResponse([],'fail','Get staff unsuccessful');
        }
    }

    public function store($request)
    {
      /*  $result=$this->productRepository->storeProduct($request);
        if( $result){
            return $this->apiResponse($result,'success','Create product successfully');
        }else{
            return $this->apiResponse([],'fail','Create product unsuccessful');
        }*/
    }

    public function showProduct($id)
    {
       /* $result = $this->productRepository->showProduct($id);
        if($result){
            return $this->apiResponse($result,'success','Show product detail successfully');
        }else{
            return $this->apiResponse([],'fail','Show product detail unsuccessful');
        }*/
    }

    public function updateProduct($request,$id){
       /* $result=$this->productRepository->updateProduct($request,$id);
        $this->productRepository->updateProductDetail($request,$id);
        if($result){
            return $this->apiResponse($result,'Success','Update product successfully');
        }else{
            return $this->apiResponse([],'fail','Update product unsuccessful');
        }*/

    }

}

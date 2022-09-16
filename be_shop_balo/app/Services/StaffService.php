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

    public function storeStaff($request)
    {
       $result=$this->staffRepository->storeStaff($request);

       if( $result){
            return $this->apiResponse($result,'success','Create staff successfully');
        }else{
            return $this->apiResponse($result,'fail','Create staff unsuccessful');
        }
    }

    public function updateStaff($request,$id){
        $result=$this->staffRepository->updateStaff($request,$id);
       // return $this->apiResponse([],$id);
        if($result){
            return $this->apiResponse($result,'Success','Update staff successfully');
        }else{
            return $this->apiResponse([],'Fail','Update staff unsuccessful');
        }

    }

    public function deleteStaff($id){
        $result=$this->staffRepository->deleteStaff($id);
        // return $this->apiResponse([],$id);
        if($result){
            return $this->apiResponse($result,'Success','Delete staff successfully');
        }else{
            return $this->apiResponse([],'Fail','Delete staff unsuccessful');
        }

    }

}

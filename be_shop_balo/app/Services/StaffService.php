<?php

namespace App\Services;

use App\Helpers\Helper;
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

    public function  showStaff($id){
        $result=$this->staffRepository->getStaff($id);
        if($result){
            return $this->apiResponse($result,'success','Find staff success');

        }else{
            return $this->apiResponse([],'fail','Find unsuccessful');
        }
    }

    public function storeStaff($request)
    {
       // return $this->apiResponse('','testing',$request->all());
        $avatar=$request->input('avatar');
       $remakeRequest=[
           'role_id'=>$request->input('role_id'),
           'first_name'=>$request->input('first_name'),
           'last_name'=>$request->input('last_name'),
           'gender'=>$request->input('gender'),
           'phone'=>$request->input('phone'),
           'email'=>$request->input('email'),
           'password'=>bcrypt($request->input('password')),
         'avatar'=>Helper::saveImgBase64($avatar,'Staff'),
           'status'=>1,
           'address'=> $request->input('address'),
           'created_date'=>$request->input('created_date'),
       ];
       //return $this->apiResponse([],'success','');
     $result=$this->staffRepository->storeStaff( $remakeRequest);
       if( $result){
            return $this->apiResponse($result,'success','Create staff successful');
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

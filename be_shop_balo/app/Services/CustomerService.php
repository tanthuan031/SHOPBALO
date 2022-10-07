<?php

namespace App\Services;

use App\Helpers\Helper;
use App\Http\Traits\ApiResponse;
use App\Repositories\CustomerRepository;

class CustomerService
{
    use apiResponse;
    protected CustomerRepository $CustomerRepository;

    public function __construct(CustomerRepository $CustomerRepository)
    {
        $this->CustomerRepository = $CustomerRepository;
    }

    public function getAllCustomer($request): \Illuminate\Http\JsonResponse
    {

        $result = $this->CustomerRepository->getAllCustomer($request);
       // return $this->apiResponse([],'sending',$result);
      if($result){
            return $this->apiResponse($result,'success','Get all Customer success');

        }else{
            return $this->apiResponse([],'fail','Get Customer unsuccessful');
        }
    }

    public function  showCustomer($id){
        $result=$this->CustomerRepository->getCustomer($id);
        if($result){
            return $this->apiResponse($result,'success','Find Customer success');

        }else{
            return $this->apiResponse([],'fail','Find unsuccessful');
        }
    }

    public function storeCustomer($request): \Illuminate\Http\JsonResponse
    {
        // return $this->apiResponse('','testing',$request->all());
        $avatar=Helper::saveImgBase64($request->avatar,'Customer');
        $dataRequest=[
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'gender'=>$request->gender,
            'phone'=>$request->phone,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'point' =>$request->point,
            'avatar'=>$avatar,//'abcd.png'
            'status'=>1,
            'address'=> $request->address,
            'created_date'=>$request->created_date,
        ];

        $result=$this->CustomerRepository->storeCustomer( $dataRequest);
      //  return $this->apiResponse('','fail',$result);
        if( $result){
            return $this->apiResponse($result,'success','Create Customer successful');
        }else{
            return $this->apiResponse([],'fail','Create Customer unsuccessful');
        }
    }

    public function updateCustomer($request,$id): \Illuminate\Http\JsonResponse
    {
        if (!is_null($request->avatar)) {
            $request['avatar'] = Helper::saveImgBase64($request->avatar,'Customer');
        }
      /*if(!is_null($request->created_date)) {
            $request['created_date'] = date('Y-m-d' , strtotime($request->created_date));
        }*/
        $result=$this->CustomerRepository->updateCustomer($request,$id);
        //return $this->apiResponse([],$result,'ÚUp');
        if($result){
            return $this->apiResponse($result,'success','Update Customer successfully');
        }else{
            return $this->apiResponse([],'Fail','Update Customer unsuccessful');
        }

    }

    public function deleteCustomer($id){
        $result=$this->CustomerRepository->deleteCustomer($id);
        if($result){
            return $this->apiResponse($result,'Success','Delete Customer successfully');
        }else{
            return $this->apiResponse([],'Fail','Delete Customer unsuccessful');
        }

    }

    public function getSearchCustomer($request){
        $result=$this->CustomerRepository->getSearchCustomer($request);
        if($result){
            return $this->apiResponse($result,'Success','Search Customer successful');
        }
        else{
            return $this->apiResponse([],'Fail','Search Customer unsuccessful');
        }
    }

}

<?php

namespace App\Repositories;

use App\Http\Resources\Customer\CustomerResource;
use App\Models\Customer;
use App\Repositories\BaseRepository;
use Illuminate\Database\Query\Builder;

class CustomerRepository extends BaseRepository
{
    protected $customer;
    protected int $paginate=8;
    public function __construct(Customer $Customer)
    {
        $this->customer =  $Customer;
        parent::__construct( $Customer);
    }
    public function getAllCustomer($request)
    {
        $data = Customer::query()
            ->sort($request)
            ->search($request)
            ->filter($request)
            ->paginate($this->paginate);
        return CustomerResource::collection($data)->response()->getData();

    }
    public function getCustomer(int $id)
    {
        $data = Customer::query()->with('roles')->find($id);
        return CustomerResource::make($data)->response()->getData();
    }
    public function storeCustomer($request): \Illuminate\Database\Eloquent\Model|bool|\Illuminate\Database\Eloquent\Builder
    {

        try {
            $Customer = Customer::query()->create($request);

        }catch (\Exception $e){
            return false;
        }
        return $Customer;
    }
    public function updateCustomer($request,$id)
    {
        try{

            $Customer=  Customer::query()->where('id','=',$id)->first();
            $Customer->update($request->all());
        }
        catch (\Exception $e){
            return false;
        }
        return $Customer;
    }
    public function deleteCustomer($id){
        try{
            $Customer=  Customer::query()->where('id','=',$id)->first();
            $Customer->delete();
        }
        catch (\Exception $e) {
            return false;
        }
        return $Customer;
    }


}
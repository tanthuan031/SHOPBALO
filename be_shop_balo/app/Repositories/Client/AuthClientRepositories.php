<?php

namespace App\Repositories\Client;

use App\Models\Customer;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthClientRepositories extends BaseRepository
{
    protected $auth;
    public function  __construct(Customer $customer)
    {
        $this->auth = $customer;
    }

    public function register($request)
    {
        $checkMail = Customer::query()->where('email', $request['email'])->first();
        if ($checkMail === null) {
            $result = Customer::query()->create($request);
            $data = [
                'data' => $result,
                'message' => "Register customer successful",
                'status' => 200,
            ];
        } else {
            $data = [
                'message' => "Email available",
                'status' => 403,
            ];
        }

        return $data;
    }

    public function login($request)
    {
        $customer = Customer::query()->where('email', $request->email)->first();
        if ($customer) {
            if ($customer->status === 1) {

                if (Hash::check($request->password, $customer->password)) {

                    $token = $customer->createToken($customer->email)->plainTextToken;

                    $data = [
                        'token' => $token,
                        'message' => "Login successfully",
                        'status' => 200,
                    ];
                } else {
                    $data = [
                        'message' => "Password is incorrect",
                        'status' => 403,
                    ];
                }
            } else {
                $data = [
                    'message' => "Your account has been locked",
                    'status' => 401,
                ];
            }
        } else {
            $data = [
                'message' => "Email does not exits",
                'status' => 403,
            ];
        }
        return $data;
    }

    public function updateCustomerClient($request, $id)
    {
        try {

            $Customer =  Customer::query()->where('id', '=', $id)->first();
            $Customer->update($request->all());
        } catch (\Exception $e) {
            return false;
        }
        return $Customer;
    }

    public function getMeClient()
    {
        return Auth::user();
    }
}

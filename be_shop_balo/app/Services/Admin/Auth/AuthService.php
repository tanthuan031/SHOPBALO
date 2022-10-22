<?php

namespace App\Services\Admin\Auth;

use App\Http\Traits\ApiResponse;
use App\Repositories\Admin\Auth\AuthRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    use ApiResponse;
    protected AuthRepository $authRepository;
    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }
    public function login($data)
    {
        $result = $this->authRepository->login($data);
        if ($result['status'] == 200) {
            return response()->json([
                "data" => $result,
            ], 200);
        } else {
            return response()->json([
                "data" => $result
            ], $result['status']);
        }
    }
    public function getMe()
    {
        $result = $this->authRepository->getMe();
        // dd($result);
        return $this->apiResponse($result, 'success', 'Get Information Successfully');
    }

    public function logout($request)
    {

        $result = $this->authRepository->logout($request);
        if ($result['status'] === 200) {
            return $this->apiResponse([], 'success', $result['message'], $result['status']);
        }
    }
    public function otpSendMail($request)
    {
        $result = $this->authRepository->otpSendMail($request);
        if ($result['status'] == 200) {
            return $this->apiResponse([], $result['status'], $result['message']);
        } else {
            return $this->apiResponse([], $result['status'],  $result['message']);
        }
    }
    public function forgotPassword($request)
    {

        if (!empty($request->get('email')) && !empty($request->get('otp')) && !empty($request->get('password'))) {
            $dataRequest = [
                'email' => $request->get('email'),
                'password' => Hash::make($request->password),
                'otp' => $request->get('otp')
            ];
            $result = $this->authRepository->forgotPassword($dataRequest);
        } else {
            $result = [
                'status' => 403,
                'message' => 'Field not found',
            ];
        }

        // dd($result);
        if ($result['status'] === 200) {
            return $this->apiResponse([], 'success', $result['message']);
        } else {
            return $this->apiResponse([], $result['status'], $result['message']);
        }
    }
}

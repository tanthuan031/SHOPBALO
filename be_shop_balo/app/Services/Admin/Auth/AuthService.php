<?php

namespace App\Services\Admin\Auth;

use App\Http\Traits\ApiResponse;
use App\Repositories\Admin\Auth\AuthRepository;
use Illuminate\Http\JsonResponse;

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
    public function forGotPassword($request)
    {
        $result = $this->authRepository->forgotPassword($request);
        if ($result['status'] == 200) {
            return $this->apiResponse($result, $result['status'], $result['message']);
        } else {
            return $this->apiResponse([], $result['status'],  $result['message']);
        }
    }
}

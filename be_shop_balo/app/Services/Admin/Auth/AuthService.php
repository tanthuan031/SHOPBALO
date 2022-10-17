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
    public function getMe(): JsonResponse
    {
        $result = $this->authRepository->getMe();

        return $this->apiResponse($result, 'success', 'Get Information Successfully');
    }
}

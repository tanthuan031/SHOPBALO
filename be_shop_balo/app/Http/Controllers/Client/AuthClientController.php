<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;

use App\Services\Client\AuthClientServices;
use Illuminate\Http\Request;

class AuthClientController extends Controller
{
    protected AuthClientServices $authService;
    public function __construct(AuthClientServices $authService)
    {
        $this->authService = $authService;
    }
    public function register(Request $request)
    {
        return $this->authService->register($request);
    }

    public function login(Request $request)
    {
        return $this->authService->login($request);
    }
    public function updateprofile(Request $request, $id)
    {
        return $this->authService->updateCustomerClient($request, $id);
    }
}

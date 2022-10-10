<?php

namespace App\Repositories\Admin\Auth;

use App\Models\Staff;
use App\Repositories\BaseRepository;
use Exception;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthRepository extends BaseRepository
{
    protected $auth;
    public function __construct(Staff $auth)
    {
        $this->auth = $auth;
    }
    public function login($request)
    {
        $staff = Staff::query()->where('email', $request->email)->first();
        if ($staff) {
            if (Hash::check($request->password, $staff->password)) {
                $token = $staff->createToken($staff->email)->plainTextToken;
                $data = [
                    'token' => $token,
                    'message' => "Login successfully",
                    'status' => 200,
                ];
            } else {
                $data = [
                    'message' => "Login failed",
                    'status' => 403,
                ];
            }
        } else {
            $data = [
                'message' => "Email does not exits",
                'status' => 400,
            ];
        }
        return $data;
    }

    public function getMe(): ?Authenticatable
    {
        return Auth::user();
    }
}

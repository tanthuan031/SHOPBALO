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
            if ($staff->status === 1) {
                if (Hash::check($request->password, $staff->password)) {
                    $token = $staff->createToken($staff->email)->plainTextToken;
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

    public function getMe(): ?Authenticatable
    {
        return Auth::user();
    }
}

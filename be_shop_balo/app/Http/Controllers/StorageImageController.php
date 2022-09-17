<?php

namespace App\Http\Controllers;

use App\Http\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class StorageImageController extends Controller
{
    use ApiResponse;
    public function index(Request $request, $filename)
    {
        $image = explode(",", $request->get('cat'));
        $url = [];
        foreach ($image as $key => $value) {
            array_push($url, url('storage/' . $filename . '/' . $value));
        }

        $data = [
            'data' => [$url]

        ];
        return $this->apiResponse($data, 'success', 'true');
    }
}

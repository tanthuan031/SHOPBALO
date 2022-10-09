<?php

namespace App\Services;

use App\Http\Resources\Slider\GetAllResource;
use App\Http\Traits\ApiResponse;
use App\Repositories\SliderRepository;

class SliderService
{
    use ApiResponse;
    protected $limit = 10;
    protected $sliderRepo;
    public function __construct(SliderRepository $sliderRepo)
    {
        $this->sliderRepo = $sliderRepo;
    }


    public function getAll($request)
    {
        $search = [];
        (is_null($request->q) || (empty($request->q))) ? $search['key'] = null : $search['key'] = $request->q;
        (is_null($request->status) || (empty($request->status))) ? $search['status'] = 'all' : $search['status'] = $request->status;
        (is_null($request->per_page) || (empty($request->per_page))) ? $search['per_page'] = $this->limit : $search['per_page'] = $request->per_page;
        (is_null($request->sort) || (empty($request->sort))) ? $search['sort'] = 'desc' : $search['sort'] = $request->sort;

        $sliders = $this->sliderRepo->getAll($search);

        $data = [];
        if (!is_null($sliders)) {
            $data = GetAllResource::collection($sliders)->response()->getData();
        }

        return  $this->apiResponse($data, 200, 'list sliders');
    }
}

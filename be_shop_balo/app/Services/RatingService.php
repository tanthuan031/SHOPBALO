<?php

namespace App\Services;

use App\Helpers\Helper;
use App\Http\Resources\Rating\GetAllresource;
use App\Http\Resources\Rating\ShowResource;
use App\Http\Traits\ApiResponse;
use App\Repositories\RatingRepository;
use Exception;

class RatingService
{
    use ApiResponse;
    protected $ratingRepo;
    protected $limit = 10;
    public function __construct(RatingRepository $ratingRepo)
    {
        $this->ratingRepo = $ratingRepo;
    }


    /**
     * getAll
     *@author tranvannghia021
     * @param  mixed $request
     * @return response
     */
    public function getAll($request)
    {
        $search = [];
        (is_null($request->_q) || (empty($request->_q))) ? $search['key'] = null : $search['key'] = $request->_q;
        (is_null($request->_per_page) || (empty($request->_per_page))) ? $search['per_page'] = $this->limit : $search['per_page'] = $request->_per_page;
        $ratings = $this->ratingRepo->getAll($search);
        $data = [];

        if (!is_null($ratings)) {
            $data = GetAllresource::collection($ratings)->response()->getData();
        }
        return $this->apiResponse($data, 200, 'List rating');
    }


    /**
     * create
     *@author tranvannghia021
     * @param  mixed $request
     * @return response
     */
    public function create($request)
    {
        $payload = [
            'customers' => $request->customer_id,
            'product_id' => $request->product_id,
            'point' => $request->point,
            'content' => $request->content,
            'image' => Helper::saveImgBase64v1($request->image, 'Rating'),
        ];
        $rating = $this->ratingRepo->create($payload);
        $data = [];
        if (!is_null($rating)) {
            $data = (new ShowResource($rating));
        }
        return $this->apiResponse($data, 200, 'Create rating successfully.');
    }


    /**
     * show
     *@author tranvannghia021
     * @param  mixed $id
     * @return response
     */
    public function show($id)
    {
        if (is_null($id)) throw new Exception();
        $rating = $this->ratingRepo->find(intval($id));
        $data = [];
        if (!is_null($rating)) {
            $data = (new ShowResource($rating));
        }

        return $this->apiResponse($data, 200, 'Show rating.');
    }


    /**
     * update
     *@author tranvannghia021
     * @param  mixed $request
     * @param  mixed $id
     * @return bool
     */
    public function update($request, $id)
    {
        if (is_null($id)) throw new Exception();

        $payload = [
            'customers' => $request->customer_id,
            'product_id' => $request->product_id,
            'point' => $request->point,
            'content' => $request->content,

        ];
        if ($request->image != '' || !is_null($request->image)) {
            $payload['image'] = Helper::saveImgBase64v1($request->image, 'Rating');
        }
        $result = $this->ratingRepo->update($id, $payload);

        return $result ? $this->apiResponse([], 200, 'Update rating successfully') : $this->apiResponse([], 401, 'Update rating failed');
    }


    public function destroy($id)
    {
        if (is_null($id)) throw new Exception();

        $result = $this->ratingRepo->delete($id);
        return $result ? $this->apiResponse([], 200, 'Delete rating successfully') : $this->apiResponse([], 401, 'Delete rating failed');
    }
}

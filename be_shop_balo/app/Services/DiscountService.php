<?php

namespace App\Services;

use App\Http\Resources\Discount\GetAllResource;
use App\Http\Resources\Discount\ShowResource;
use App\Http\Traits\ApiResponse;
use App\Repositories\DiscountRepository;
use Exception;

class DiscountService
{
    use ApiResponse;
    protected $discountRepo;
    protected $limit = 10;
    public function __construct(DiscountRepository $discountRepo)
    {
        $this->discountRepo = $discountRepo;
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
        (is_null($request->q) || (empty($request->q))) ? $search['key'] = null : $search['key'] = $request->q;
        (is_null($request->status) || (empty($request->status))) ? $search['status'] = 'all' : $search['status'] = $request->status;
        (is_null($request->per_page) || (empty($request->per_page))) ? $search['per_page'] = $this->limit : $search['per_page'] = $request->per_page;
        $discounts = $this->discountRepo->getAll($search);

        $data = [];
        if (!is_null($discounts)) {
            $data = GetAllResource::collection($discounts)->response()->getData();
        }
        return $this->apiResponse($data, 200, 'List discounts');
    }


    /**
     * create
     *  @author tranvannghia021
     * @param  mixed $request
     * @return response
     */
    public function create($request)
    {
        $payload = [
            'name' => $request->name,
            'value' => (float)$request->value,
            'status' => $request->status == 'Active' ? true : false,
            'description' => $request->description
        ];
        $discount = $this->discountRepo->create($payload);
        $data = [];
        if (!is_null($discount)) {
            $data = (new ShowResource($discount));
        }
        return $this->apiResponse($data, 200, 'Create discount successfully');
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
        $discount = $this->discountRepo->find(intval($id));
        $data = [];
        if (!is_null($discount)) {
            $data = (new ShowResource($discount));
        }
        return $this->apiResponse($data, 200, 'Show discount');
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
            'name' => $request->name,
            'value' => (float)$request->value,
            'status' => $request->status == 'Active' ? true : false,
            'description' => $request->description
        ];
        $result = $this->discountRepo->update($id, $payload);


        return $result ? $this->apiResponse([], 200, 'Update discount successfully') : $this->apiResponse([], 401, 'Update discount failed');
    }


    /**
     * destroy
     * @author tranvannghia021
     *
     * @param  mixed $id
     * @return bool
     */
    public function destroy($id)
    {
        if (is_null($id)) throw new Exception();
        $result = $this->discountRepo->delete($id);

        return $result ? $this->apiResponse([], 200, 'Delete discount successfully') : $this->apiResponse([], 401, 'Delete discount failed');
    }
}
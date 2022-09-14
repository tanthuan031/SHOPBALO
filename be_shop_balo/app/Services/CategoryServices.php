<?php

namespace App\Services;

use App\Http\Resources\Category\GetAllResource;
use App\Http\Resources\category\ShowResource;
use App\Repositories\CategoryRepository;
use App\Helpers\Helper;
// use App\Http\Traits\ApiResponse;
use Exception;
use Illuminate\Http\JsonResponse;

class CategoryServices
{

    // use ApiResponse;
    protected $categoryRepo;
    public function __construct(CategoryRepository $categoryRepo)
    {
        $this->categoryRepo = $categoryRepo;
    }


    /**
     * getAll
     *
     * @return collection
     */
    public function getAll()
    {
        $categories = $this->categoryRepo->getAll();
        $data = [];
        if (!is_null($categories)) {
            $data = getAllResource::collection($categories);
        }


        return  $this->apiResponse($data, 200, 'list category');
    }


    /**
     * show
     *
     * @param  mixed $id
     * @return collection
     */
    public function show(int $id)
    {
        if (is_null($id)) throw new Exception();

        $category = $this->categoryRepo->find(intval($id));
        $data = [];
        if (!is_null($category)) {
            $data = (new ShowResource($category));
        }


        return  $this->apiResponse($data, 200, 'Show category');
    }


    /**
     * create
     *
     * @param  mixed $request
     * @return response
     */
    public function create($request)
    {
        if (is_null($request)) throw new Exception();
        $data = [
            'name' => $request->name,
            'parent_id' => ($request->parent_id < 0) || (is_null($request->parent_id)) ? 0 : intval($request->parent_id),
            'image' => Helper::saveImgBase64($request->image, 'Category'),
        ];
        $category = $this->categoryRepo->create($data);

        $isCheckCreate = (is_null($category)) ? false : true;

        return  $isCheckCreate ?  $this->apiResponse($data, 200, 'Create category successfully') : $this->apiResponse($data, 422, 'Create category failed.');
    }


    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $id
     * @return response
     */
    public function update($request, int  $id)
    {
        if (is_null($request) || is_null($id)) throw new Exception();
        $data = [
            'name' => $request->name,
            'parent_id' => ($request->parent_id < 0) || (is_null($request->parent_id)) ? 0 : intval($request->parent_id),
        ];
        if ($request->image) {
            $data['image'] = Helper::saveImgBase64($request->image, 'Category');
        }
        $category = $this->categoryRepo->update(intval($id), $data);

        $isCheckCreate = (is_null($category)) ? false : true;

        return  $isCheckCreate ?  $this->apiResponse($data, 200, 'Update category successfully.') : $this->apiResponse($data, 422, 'Update category failed.');
    }


    public function delete(int $id)
    {
        if (is_null($id)) throw new Exception();
        $result = $this->categoryRepo->delete(intval($id));

        return $result ? $this->apiResponse([], 200, 'Delete category successfully') : $this->apiResponse([], 412, 'Delete category failed,try againt');
    }

    /**
     * apiResponse
     *
     * @param  mixed $data
     * @param  mixed $status
     * @param  mixed $message
     * @param  mixed $code
     * @return JsonResponse
     */
    protected function apiResponse($data = [], $status = null, $message = null, $code = 200): JsonResponse
    {
        $json = [
            'status' => $status,
            'message' => $message,
        ];

        if (!empty($data)) {
            $json['data'] = $data;
        }

        return response()->json($json, $code);
    }
}

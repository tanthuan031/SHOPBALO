<?php

namespace App\Services;

use App\Http\Resources\Category\GetAllResource;
use App\Http\Resources\category\ShowResource;
use App\Repositories\CategoryRepository;
use App\Helpers\Helper;
use App\Http\Traits\ApiResponse;
use Exception;

class CategoryService
{

    use ApiResponse;
    protected $categoryRepo;
    protected $limit = 10;
    public function __construct(CategoryRepository $categoryRepo)
    {
        $this->categoryRepo = $categoryRepo;
    }


    /**
     * getAll
     *
     * @return collection
     */
    public function getAll($request)
    {
        $search = [];
        (is_null($request->_q) || (empty($request->_q))) ? $search['key'] = null : $search['key'] = $request->_q;
        (is_null($request->_status) || (empty($request->_status))) ? $search['status'] = 'all' : $search['status'] = $request->_status;
        (is_null($request->_per_page) || (empty($request->_per_page))) ? $search['per_page'] = $this->limit : $search['per_page'] = $request->_per_page;
        (is_null($request->_sort_id) || (empty($request->_sort_id))) ? $search['sort_id'] = null : $search['sort_id'] = $request->_sort_id;

        $categories = $this->categoryRepo->getAll($search);

        $data = [];
        if (!is_null($categories)) {
            $data = getAllResource::collection($categories)->response()->getData();
        }

        return  $this->apiResponse($data, 200, 'list category');
    }


    /**
     * show
     *
     * @param  mixed $id
     * @return response
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
        $fileName = Helper::saveImgBase64v1($request->image, 'Category');

        if ($fileName == false) return $this->apiResponse([], 422, 'Image is invalid.Try againt');
        $data = [
            'name' => $request->name,
            'parent_id' => ($request->parent_id < 0) || (is_null($request->parent_id)) ? 0 : intval($request->parent_id),
            'image' => $fileName,
        ];
        $category = $this->categoryRepo->create($data);

        $isCheckCreate = (is_null($category)) ? false : true;

        return  $isCheckCreate ?  $this->apiResponse($category, 200, 'Create category successfully') : $this->apiResponse($category, 422, 'Create category failed.');
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
            $fileName = Helper::saveImgBase64v1($request->image, 'Category');
            if ($fileName == false) return $this->apiResponse([], 422, 'Image is invalid.Try againt');

            $data['image'] =  $fileName;
        }
        $category = $this->categoryRepo->update(intval($id), $data);

        $isCheckCreate = (is_null($category)) ? false : true;

        return  $isCheckCreate ?  $this->apiResponse($data, 200, 'Update category successfully.') : $this->apiResponse($data, 422, 'Update category failed.');
    }


    /**
     * delete
     *
     * @param  mixed $id
     * @return response
     */
    public function delete(int $id)
    {
        if (is_null($id)) throw new Exception();
        $result = $this->categoryRepo->delete(intval($id));

        return $result ? $this->apiResponse([], 200, 'Delete category successfully') : $this->apiResponse([], 412, 'Delete category failed,try againt');
    }


    public function forgot(int $id)
    {
        if (is_null($id)) throw new Exception();
        $result = $this->categoryRepo->forgot(intval($id));

        return $result ? $this->apiResponse([], 200, 'Delete category successfully') : $this->apiResponse([], 412, 'Delete category failed,try againt');
    }
}

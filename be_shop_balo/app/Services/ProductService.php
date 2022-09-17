<?php

namespace App\Services;

use App\Helpers\Helper;
use App\Http\Traits\ApiResponse;
use App\Repositories\ProductRepository;

class ProductService
{
    use apiResponse;
    protected ProductRepository $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAllProduct($request)
    {
        $result = $this->productRepository->getAllProduct($request);
        if ($result) {
            return $this->apiResponse($result, 'success', 'Get all product success');
        } else {
            return $this->apiResponse([], 'fail', 'Get product unsuccessful');
        }
    }

    public function store($request)
    {
        $image = $request->image;
        $imageSlide = $request->image_slide;
        // return $image;
        $dataRequest = [
            'category_id' => $request->category_id,
            'name' => $request->name,
            'description' => $request->description,
            'image' => Helper::saveImgBase64($image, 'Product'),
            'image_slide' => Helper::saveImgBase64($imageSlide, 'ProductSlide'),
            'code_color' => $request->code_color,
            'amount' => $request->amount,
            'price' => $request->price
        ];
        $result = $this->productRepository->storeProduct($dataRequest);
        if ($result) {
            return $this->apiResponse($result, 'success', 'Create product successfully');
        } else {
            return $this->apiResponse([], 'fail', 'Create product unsuccessful');
        }
    }

    public function showProduct($id)
    {
        $result = $this->productRepository->showProduct($id);
        if ($result) {
            return $this->apiResponse($result, 'success', 'Show product detail successfully');
        } else {
            return $this->apiResponse([], 'fail', 'Show product detail unsuccessful');
        }
    }

    public function updateProduct($request, $id)
    {


        if (!is_null($request->image)) {

            $request['image'] = Helper::saveImage('Product', $request->image);
        }
        if (!is_null($request->image_slide)) {
            $request['image_slide'] = Helper::saveImage('ProductSlide', $request->image_slide);
        }

        $result = $this->productRepository->updateProduct($request, $id);
        $this->productRepository->updateProductDetail($request, $id);

        if ($result) {
            return $this->apiResponse($result, 'Success', 'Update product successfully');
        } else {
            return $this->apiResponse([], 'fail', 'Update product unsuccessful');
        }
    }
}

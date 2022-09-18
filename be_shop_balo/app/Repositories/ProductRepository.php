<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;

use App\Models\ProductDetail;
use App\Repositories\BaseRepository;
use Illuminate\Database\Query\Builder;

class ProductRepository extends BaseRepository
{
    protected $product;
    protected int $paginate = 10;
    public function __construct(Product $product)
    {
        $this->product = $product;
        parent::__construct($product);
    }
    public function getAllProduct($request)
    {
        $data = Product::query()
            ->with('categories')
            ->with('product_details')
            ->sort($request)
            ->paginate($this->paginate);
        return ProductResource::collection($data)->response()->getData();
    }
    public function showProduct($id)
    {
        $data = Product::query()->with('product_details')->find($id);
        return ProductResource::make($data);
    }
    public function storeProduct($request)
    {

        try {
            $product = Product::query()->create($request);
            ProductDetail::query()->create([
                'product_id' => $product->id,
                'code_color' => $request['code_color'],
                'amount' => $request['amount'],
                'price' => $request['price']
            ]);
        } catch (\Exception $e) {
            return false;
        }
        return Product::query()->find($product['id']);
    }

    public function updateProduct($request, $id)
    {
        $product =  Product::query()->where('id', '=', $id)->first();
        $product->update($request->all());
        return $product;
    }

    public function updateProductDetail($request, $id)
    {
        $productDetail = ProductDetail::query()->where('id', '=', $id)->first();
        $productDetail->update($request->all());
        return $productDetail;
    }
}

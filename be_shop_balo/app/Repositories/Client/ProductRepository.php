<?php

namespace App\Repositories\Client;

use App\Models\OrderDetail;
use App\Models\Product;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\DB;

class ProductRepository extends BaseRepository
{
    protected $product;
    protected $ordersDetail;

    public function __construct(Product $product)
    {
        $this->product = $product;
        $this->ordersDetail = app(OrderDetail::class);
        parent::__construct($product);
    }


    public function getAll($request = [])
    {
        return $this->product->with('categories')
            ->with('product_details')
            ->status()
            ->selling($request)
            ->sort($request)
            ->search($request)
            ->filter($request)
            ->paginate($request['per_page']);
    }

    public function sellProduct()
    {
        return $this->ordersDetail->select('product_id', DB::raw('count(*) as total'))
            ->groupBy('product_id')
            ->orderBy('total', 'desc')
            ->limit(10)->get();
    }
}
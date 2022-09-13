<?php

namespace App\Repositories;

use App\Models\Product;

use App\Repositories\BaseRepository;

class ProductRepository extends BaseRepository
{
    protected $product;
    public function __construct(Product $product)
    {
        $this->product = $product;
        parent::__construct($product);
    }
}

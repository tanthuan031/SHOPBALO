<?php

namespace App\Repositories;

use App\Models\Discount;

class DiscountRepository extends BaseRepository
{
    protected $discount;
    public function __construct(Discount $discount)
    {
        $this->discount = $discount;
        parent::__construct($discount);
    }


    /**
     * getAll
     * override
     *
     * @param  mixed $search
     * @return void
     */
    public function getAll($search = [])
    {
        return $this->discount->status(@$search['status'])
            ->search(@$search['key'])
            ->sort('value', @$search['sortValue'])
            ->paginate(@$search['per_page']);
    }
}

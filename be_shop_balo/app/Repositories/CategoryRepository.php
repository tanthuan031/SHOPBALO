<?php

namespace App\Repositories;

use App\Models\Category;

use App\Repositories\BaseRepository;

class CategoryRepository extends BaseRepository
{
    protected $category;
    public function __construct(Category $category)
    {
        $this->category = $category;
        parent::__construct($category);
    }
}

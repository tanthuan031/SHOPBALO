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


    /**
     * override
     * getAll record delete_at
     * @author  tranvannghia021
     *
     * @return collection
     */
    public function getAll($search = [])
    {

        return $this->model->withTrashed()->search($search['key'])->sort($search['sort_id'])->get();
    }


    /**
     * override
     * find
     *
     * @param  int $id
     * @return collection
     */
    public function find($id)
    {

        return $this->model->findCategory('id', $id)->first();
    }
    /**
     * forgot 
     *@author tranvannghia021
     * @param  mixed $id
     * @return void
     */
    public function forgot(int $id)
    {
        try {
            $model = $this->find($id);
            if ($model) {

                $model->forceDelete();
            }
        } catch (\Exception $e) {

            return false;
        }
        return true;
    }
}

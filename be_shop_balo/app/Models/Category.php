<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'categories';
    protected $fillable = [
        'name',
        'parent_id',
        'image',
    ];

    /**
     * scopeSort
     *
     * @param  mixed $query
     * @param  string $sort
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSort($query, $sort = 'DESC')
    {
        if (is_null($sort)) return $query->orderBy('id', 'DESC');
        return $query->orderBy('id', $sort);
    }


    /**
     * scopeSearch
     *
     * @param  mixed $query
     * @param  string $key
     * @return void
     */
    public function scopeSearch($query, $key)
    {
        if (is_null($key)) {
            return $query;
        }
        return $query->where('name', 'like', '%' . $key . '%');
    }
    /**
     * scopeFindCategory
     *
     * @param  mixed $query
     * @param  string $field
     * @param  int $id
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFindCategory($query, $field = 'id', $id)
    {
        return $query->withTrashed()->where($field, $id);
    }


    public function scopeStatus($query, $status = 'All')
    {
        switch ($status) {
            case 'Active':
                return $query;
                break;
            case 'UnActive':
                return $query->onlyTrashed();
                break;
            default:
                return $query->withTrashed();
        }
    }
}

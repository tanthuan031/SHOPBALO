<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Discount extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'discounts';
    protected $fillable = [
        'name',
        'value',
        'point',
        'status',
        'description',
    ];


    /**
     * scopeStatus
     *
     * @param  mixed $query
     * @param  mixed $status
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeStatus($query, $status = 'All')
    {
        switch ($status) {
            case 'Active':
                return $query->where('status', true);
                break;
            case 'InActive':
                return $query->where('status', false);
                break;
            default:

                return $query;
        }
    }

    /**
     * scopeSearch
     *
     * @param  mixed $query
     * @param  mixed $key
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch($query, $key)
    {
        if (is_null($key)) return $query;
        return $query->whereLike(['name', 'description'], $key);
    }



    /**
     * scopeSort
     *
     * @param  mixed $query
     * @param  mixed $value
     * @param  mixed $filter
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSort($query, $value, $filter = 'asc')
    {
        return $query->orderBy($value, $filter);
    }
}

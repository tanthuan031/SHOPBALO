<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Rating extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'ratings';
    protected $fillable = [
        'customer_id',
        'product_id',
        'point',
        'status',
        'content',
        'image',
    ];

    public function customers()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }


    public function products()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }


    public function scopeSearch($query, $key)
    {
        if (is_null($key)) return $query;
        return $query->whereLike([
            'point', 'content', 'customers.last_name', 'customers.first_name',
            'customers.email', 'customers.address', 'products.name', 'products.description'
        ], $key);
    }
}

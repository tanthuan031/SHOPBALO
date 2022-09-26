<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rating extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'ratings';
    protected $fillable = [
        'customers',
        'product_id',
        'point',
        'content',
        'image',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customers');
    }


    public function product()
    {
        return $this->belongsTo(Product::class);
    }


    public function scopeSearch($query, $key)
    {
        if (is_null($key)) return $query;
        return $query->whereLike(['point', 'content'], $key);
    }
}

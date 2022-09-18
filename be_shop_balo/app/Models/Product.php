<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory;
    protected  $table = 'products';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id',
        'name',
        'description',
        'image',
        'image_slide'
    ];
    public function categories(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function product_details(): HasOne
    {
        return $this->hasOne(ProductDetail::class,'product_id');
    }

    public function  ratings(): HasMany
    {
        return $this->hasMany(Rating::class);
    }
    public function import_details(): BelongsTo
    {
        return $this->belongsTo(ImportDetail::class);
    }
    public function order_details(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }
    public function scopeSort($query, $request)
    {
        return $query
            ->when($request->has("sort"), function ($query) use ($request) {
                $sortBy = '';
                $sortValue = '';

                foreach ($request->query("sort") as $key => $value) {
                    $sortBy = $key;
                    $sortValue = $value;
                }

                $query->orderBy($sortBy, $sortValue);
            });
    }
}

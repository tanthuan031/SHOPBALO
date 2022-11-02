<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory, SoftDeletes;
    protected  $table = 'orders';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'customer_id',
        'staff_id',
        'discount_id',
        'status',
        'discount_value',
        'total_price',
    ];
    public function customers(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
    public function discounts(): BelongsTo
    {
        return $this->belongsTo(Discount::class, 'discount_id');
    }
    public function staff(): BelongsTo
    {
        return $this->belongsTo(Staff::class, 'staff_id');
    }
    public function scopeSearch($query, $request)
    {
        return $query
            ->when($request->has('search'), function ($query) use ($request) {
                $search = $request->query('search');
                $query
                    ->where("id", "LIKE", "%{$search}%");
            })
            ->when($request->has('search'), function ($query) use ($request) {
                $search = $request->query('search');
                $query
                    ->where("customer_id", "LIKE", "%{$search}%");
            });
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

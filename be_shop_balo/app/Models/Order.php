<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
}

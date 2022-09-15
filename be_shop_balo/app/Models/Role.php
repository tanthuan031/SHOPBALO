<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable=[
        'id',
        'name'
    ];

    /*public function product_details():HasOne
    {

        return $this->hasOne(ProductDetail::class);
    }*/
}

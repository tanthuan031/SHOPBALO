<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class exportStorage extends Model
{
    use HasFactory;
    protected  $table = 'export_storages';
    protected $fillable = [
        'name',
        'export_amount',
        'product_id',
        'supplier_id'
    ];
}

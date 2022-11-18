<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class importStorage extends Model
{
    use HasFactory;
    protected  $table = 'import_storages';
    protected $fillable = [
        'name',
        'import_amount',
        'product_id',
        'supplier_id'
    ];
}

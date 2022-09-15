<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Staff extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'role_id',
        'frist_name',
        'last_name',
        'gender',
        'phone',
        'email',
        'password',
        'avatar',
        'status',
        'address',
        'created_date',
        'created_at',
        'updated_at',

    ];
    public function roles():BelongsTo
    {
        return $this->belongsTo(Role::class,'role_id');

    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'roles';
    protected $fillable = [
        'name',
        'status'
    ];
    public function scopeStatus($query, $status)
    {

        switch ($status) {
            case 'Active':
                return $query->where('status', $status);
                break;
            case 'InActive':
                return $query->where('status', $status);
                break;
            default:

                return $query;
        }
    }
    public function  role_permissions(): HasMany
    {
        return $this->hasMany(RolePermission::class);
    }


}

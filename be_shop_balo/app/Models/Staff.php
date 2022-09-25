<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Role;

class Staff extends Model
{
    use HasFactory;
    protected  $table='staff';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'role_id',
        'first_name',
        'last_name',
        'gender',
        'phone',
        'email',
        'password',
        'avatar',
        'status',
        'address',
        'created_date'

    ];
   public function roles():BelongsTo
    {
        return $this->belongsTo(Role::class,'role_id');

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

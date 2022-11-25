<?php

namespace App\Repositories\Admin;

use App\Http\Resources\Admin\Role\RoleResource;
use App\Models\Role;
use App\Repositories\BaseRepository;
use Exception;
use Illuminate\Support\Facades\DB;

class RoleRespository extends BaseRepository
{
    protected $Role;
    protected int $paginate = 15;
    public function __construct(Role $Role)
    {
        $this->Role =  $Role;
        parent::__construct($Role);
    }
    public function getAllRole($request)
    {
        try {
            $data = Role::query()
            ->with('role_permissions',function($query) {
                $query->with('permissions');
            })
           ->paginate($this->paginate);
          //  dd($data);

        }
        catch (\Exception $e) {
            dd($e);
        }
        return RoleResource::collection($data)->response()->getData();
    }


    public function storeRole($request): \Illuminate\Database\Eloquent\Builder|string
    {


        try {
            $query = Role::query()->create($request);
            return $query;

        } catch (\Exception $e) {
            return false;
        }
        return $query;
    }
    public function updateRole($request, $id)
    {

        $Role =  Role::query()->where('id', '=', $id)->first();
        $Role->update($request->all());
        return $Role;
    }
    public function deleteRole($id)
    {
        try {
            $Role =  Role::query()->where('id', '=', $id)->first();
            $Role->delete();
        } catch (\Exception $e) {
            return false;
        }
        return $Role;
    }
}

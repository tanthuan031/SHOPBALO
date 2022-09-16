<?php

namespace App\Repositories;

use App\Http\Resources\Staff\StaffResource;
use App\Models\Staff;
use App\Repositories\BaseRepository;
use Illuminate\Database\Query\Builder;

class StaffRepository extends BaseRepository
{
    protected $staff;
    protected int $paginate=5;
    public function __construct(Staff $staff)
    {
        $this->staff =  $staff;
        parent::__construct( $staff);
    }
    public function getAllStaff()
    {
        $data = Staff::query()
            ->with('roles')
            ->paginate($this->paginate);
        return StaffResource::collection($data)->response()->getData();

    }
    public function storeStaff($request){

        try {
        // $staff = Staff::query()->create($request->all());

         $staff = Staff::query()->create([
                'role_id'=>$request->input('role_id'),
                'first_name'=>$request->input('first_name'),
                'last_name'=>$request->input('last_name'),
                'gender'=>$request->input('gender'),
                'phone'=>$request->input('phone'),
                'email'=>$request->input('email'),
                'password'=>bcrypt($request->input('password')),
                'avatar'=>$request->input('avatar'),
                'status'=>1,
                'address'=> $request->input('address'),
                'created_date'=>$request->input('created_date'),
            ]);
        }catch (\Exception $e){
            return $e;
        }
        return $staff;
    }
    public function updateStaff($request,$id)
    {
        try{
            $staff=  Staff::query()->where('id','=',$id)->first();
            $staff->update($request->all());
        }
        catch (\Exception $e){
            return false;
        }
        return $staff;

    }
    public function deleteStaff($id){
        try{
            $staff=  Staff::query()->where('id','=',$id)->first();
            $staff->delete();
        }
        catch (\Exception $e) {
            return false;
        }
        return $staff;
    }
}

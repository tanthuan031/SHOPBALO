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
    public function showStaff($id){
        $data=Staff::query()->with('Staff_details')->find($id);
        return StaffResource::make($data);
    }
    public function storeStaff($request){

        try {
            $Staff = Staff::query()->create($request->all());
            StaffDetail::query()->create([
                'Staff_id'=>$Staff->id,
                'code_color'=>$request->input('code_color'),
                'amount'=>$request->input('amount'),
                'price'=>$request->input('price')
            ]);
        }catch (\Exception $e){
            return false;
        }
        return Staff::query()->find($Staff['id']);
    }
    public function updateStaff($request,$id)
    {
        $Staff=  Staff::query()->where('id','=',$id)->first();
        $Staff->update($request->all());
        return $Staff;

    }
    public function updateStaffDetail($request,$id){
        $StaffDetail = StaffDetail::query()->where('id', '=', $id)->first();
        $StaffDetail->update($request->all());
        return $StaffDetail;
    }
}

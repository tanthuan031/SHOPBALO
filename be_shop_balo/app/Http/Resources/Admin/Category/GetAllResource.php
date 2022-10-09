<?php

namespace App\Http\Resources\Admin\Category;

use Illuminate\Http\Resources\Json\JsonResource;

class GetAllResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'name' => $this->name,
            'image' => env('APP_URL') . '/storage/category/' . $this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // 'deleted_at' => $this->deleted_at
        ];
    }
}

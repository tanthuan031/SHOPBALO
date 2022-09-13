<?php

namespace App\Http\Resources\category;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
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
            'image' => env('APP_URL') . '/upload/category/' . $this->image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}

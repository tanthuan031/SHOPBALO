<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class ProductResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     */
    public function toArray($request):array
    {
        $arrayData=[
            'id'=>$this->id,
            'category_id'=>$this->category_id,
            'category_name'=>$this->categories->name,
            'name'=>$this->name,
            'description'=>$this->description,
            'image'=>$this->image,
            'image_slide'=>$this->image_slide




        ];
        return $arrayData;
    }
}

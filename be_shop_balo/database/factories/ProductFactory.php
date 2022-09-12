<?php

namespace Database\Factories;

use App\Models\GroupProduct;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'group_id' => GroupProduct::all()->random()->id,
            'name' => $this->faker->sentence($this->faker->biasedNumberBetween(4, 6)),
            'description' => $this->faker->realTextBetween()
        ];
    }
}

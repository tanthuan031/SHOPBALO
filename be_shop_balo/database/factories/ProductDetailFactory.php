<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductDetail>
 */
class ProductDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'product_id' => $this->faker->numberBetween(1,10),
            'code_color' => $this->faker->domainWord,
            'amount' => $this->faker->numberBetween(1,10),
            'price'=>$this->faker->numberBetween(1,10)
        ];
    }
}
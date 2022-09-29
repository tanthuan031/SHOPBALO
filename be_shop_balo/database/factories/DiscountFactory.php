<?php

namespace Database\Factories;

use App\Models\Discount;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class DiscountFactory extends Factory
{
    protected $model = Discount::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence($this->faker->biasedNumberBetween(4, 6)),
            'value' => 90,
            'status' => true,
            'created_date' => '2022-09-29 04:22:44',
            'description' => $this->faker->text(),
        ];
    }
}

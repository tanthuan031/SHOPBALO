<?php

namespace App\Repositories\Admin;

use App\Http\Resources\Admin\Order\OrderDetailResource;
use App\Http\Resources\Admin\Order\OrderResource;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\DB;


class OrderRepository extends BaseRepository
{
    protected $order;
    protected int $paginate = 10;
    public function __construct(Order $order)
    {
        $this->order = $order;
        parent::__construct($order);
    }
    public function getAllOrder($request)
    {
        $data = Order::query()
            ->with('customers')
            ->with('staff')
            ->with('discounts')
            // ->sort($request)
            // ->filter($request)
            ->search($request)
            ->paginate($this->paginate);
        return OrderResource::collection($data)->response()->getData();
    }

    public function getOrderDetailById($id)
    {
        $data = OrderDetail::query()
            ->where('order_id', $id)
            ->with('products')
            ->get();
        return
            OrderDetailResource::collection($data)->response()->getData();
    }
    public function getOrderById($id)
    {
        $data = Order::query()->find($id);
        return
            OrderResource::make($data);
    }
    public function updateOrder($request, $id)
    {
        $order = Order::query()->where('id', '=', $id)->first();
        if ($order) {
            $order->update($request->all());
            return $order;
        } else {
            return false;
        }
    }
    public function getFigureOrders($request)
    {
//        SELECT DATE(created_order_date) as date,COUNT(*)AS amount_order
//        FROM orders
//        GROUP BY created_order_date
//        HAVING created_order_date BETWEEN '2022-10-10' AND '2022-10-20'

      $result= Order::query()
            ->select(DB::raw('DATE(created_order_date) as date'), DB::raw('COUNT(*)AS amount_order'))
            ->groupBy('date')
            // ->havingRaw('date BETWEEN  2022-10-10 AND 2022-10-20')
            ->get();
//      dd($result);
//
        return response()->json( $result)->getData();


    }
    public function getFigureRevenue($request)
    {
        $result= Order::query()
            ->select(DB::raw('DATE(created_order_date) as date'), DB::raw('SUM(total_price) AS revenue'))
          //  ->where('status',2)
            ->groupBy('date')
            // ->havingRaw('date BETWEEN  2022-10-10 AND 2022-10-20')
            ->get();
//      dd($result);
//
        return response()->json( $result)->getData();


    }
    public function getFigureStaffSelling($request)
    {
//        SELECT staff.id,staff.last_name,COUNT(orders.staff_id) as amount_order
//        FROM orders, staff
//        WHERE staff.id=orders.staff_id
//        GROUP BY orders.staff_id;
        try {
            $result=Order::query()
                ->join('staff','staff.id','=','orders.staff_id')
                ->select('orders.staff_id','staff.first_name','staff.last_name',DB::raw('COUNT(orders.staff_id) as amount_order'))
                ->where('orders.status','2')
                ->groupBy('orders.staff_id','staff.first_name','staff.last_name')
                ->skip(0)->take(5)

                ->get();
        }
        catch (\Exception $e){
            dd($e);
        }

            //->toSql();

       return response()->json( $result)->getData();


    }
    public function getFigureCategorySelling($request)
    {// chua xet amount
//        SELECT ct.id as id, ct.name, COUNT(*)*od.amount  As number_category
//FROM `orders` as o, order_details as od, products as pd,categories as ct
//WHERE o.id=od.order_id AND od.product_id=pd.id AND pd.category_id=ct.id
//GROUP BY ct.id,ct.name;

        try {
            $result=Order::query()
                ->join('order_details','order_details.order_id','=','orders.id')
                ->join('products','products.id','=','order_details.product_id')
                ->join('categories','categories.id','=','products.category_id')
                ->select('categories.id','categories.name',DB::raw('COUNT(categories.id) as amount_categories'))
               // ->where('orders.status','2')
                ->groupBy('categories.id','categories.name')
                ->get();
        }
        catch (\Exception $e){
            dd($e);
        }

        //->toSql();

        return response()->json( $result)->getData();


    }

}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignsToInCarts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
            Schema::table('in_carts', function (Blueprint $table) {
                if (!Schema::hasColumn('in_carts', 'customer_id')) {
                    $table->bigInteger('customer_id')->unsigned()->nullable();
                }
                if (!Schema::hasColumn('order_details', 'product_id')) {
                    $table->bigInteger('product_id')->unsigned()->nullable();
                }
               
                $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
                $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plan_classements', function (Blueprint $table) {
            $table->id('code_plan_classement');
            $table->string('plan_classement');
<<<<<<< HEAD
=======

>>>>>>> d6270158d3d7e819e8763fedbda2eb12c0147aa2
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_classements');
    }
};

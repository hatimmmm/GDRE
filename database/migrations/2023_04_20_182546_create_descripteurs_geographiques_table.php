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
        Schema::create('descripteurs_geographiques', function (Blueprint $table) {
            $table->id('id_descripteur_geographique');
            $table->string('descripteur_geographique')->nullable();
            $table->string('qualite')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('descripteurs_geographiques');
    }
};

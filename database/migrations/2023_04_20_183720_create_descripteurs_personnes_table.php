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
        Schema::create('descripteurs_personnes', function (Blueprint $table) {
            $table->id('id_descripteur_personne');
            $table->string('abrege')->nullable();
            $table->string('descripteur_personne')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('descripteurs_personnes');
    }
};

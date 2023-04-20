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
        Schema::create('descripteurs_thematiques', function (Blueprint $table) {
            $table->id('id_descripteurs_thematiques');
            $table->string('descripteur_thematique');
            $table->string('objet_ou_action')->nullable();
            $table->string('voir')->nullable();
            $table->string('voir_aussi')->nullable();
            $table->string('commentaire')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('descripteurs_thematiques');
    }
};

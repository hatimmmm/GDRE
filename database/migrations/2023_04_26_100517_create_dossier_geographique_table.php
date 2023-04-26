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
        Schema::create('dossier_geographique', function (Blueprint $table) {
            $table->foreignId('id_dossier')->constrained('dossiers','id_dossier')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_descripteur_geographique')->constrained('descripteurs_geographiques','id_descripteur_geographique')->onDelete('cascade')->onUpdate('cascade');
            $table->string('qualite')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dossier_geographique');
    }
};

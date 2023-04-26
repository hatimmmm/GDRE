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
        Schema::create('exemplaire_emprunt', function (Blueprint $table) {
            $table->foreignId('id_exemplaire')->constrained('exemplaires_sd','id_exemplaire')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_emprunt')->constrained('emprunts','id_emprunt')->onDelete('cascade')->onUpdate('cascade');
            $table->smallInteger('duree_pret')->nullable();
            $table->date('date_retour_prevu')->nullable();
            $table->date('date_retour')->nullable();
            $table->string('motif_retard')->nullable();
            $table->boolean('valid_retour')->nullable();
            $table->string('observation')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exemplaire_emprunt');
    }
};

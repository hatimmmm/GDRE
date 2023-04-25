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
        Schema::create('sous_dossiers', function (Blueprint $table) {
            $table->id('id_sous_dossier');
            $table->foreignId('id_dossier')->constrained('dossiers','id_dossier')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('num')->nullable();
            $table->string('num_dossier')->nullable();
            $table->string('titre')->nullable();
            $table->string('sous_titre')->nullable();
            $table->dateTime('date_debut')->nullable();
            $table->dateTime('date_fin')->nullable();
            $table->string('num_identifiant')->nullable();
            $table->string('auteur')->nullable();
            $table->string('nombre_copies')->nullable();
            $table->boolean('manquant')->nullable();
            $table->string('intitule_num_identifiant')->nullable();
            $table->string('observation')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sous_dossiers');
    }
};

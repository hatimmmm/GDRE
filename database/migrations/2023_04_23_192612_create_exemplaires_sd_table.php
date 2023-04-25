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
        Schema::create('exemplaires_sd', function (Blueprint $table) {
            $table->id('id_exemplaire');
            $table->foreignId('id_sous_dossier')->constrained('sous_dossiers','id_sous_dossier')->onUpdate('cascade')->onDelete('cascade');
            $table->string('cote_topo')->nullable();
            $table->boolean('exclu_du_pret')->nullable();
            $table->text('observation')->nullable();
            $table->boolean('disponibilite')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exemplaire_s_d_s');
    }
};

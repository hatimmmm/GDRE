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
        Schema::create('dossier_langue', function (Blueprint $table) {
            $table->foreignId('id_dossier')->constrained('dossiers','id_dossier')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_langue')->constrained('langues','id_langue')->onDelete('cascade')->onUpdate('cascade');
            $table->string('qualite')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dossier_langue');
    }
};

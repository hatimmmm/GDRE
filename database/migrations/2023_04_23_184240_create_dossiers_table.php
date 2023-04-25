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
        Schema::create('dossiers', function (Blueprint $table) {
            $table->id('id_dossier');
            $table->foreignId('id_plan_classement')->constrained('plan_classements','code_plan_classement')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('num_versement')->constrained('versements','num_versement')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_type_dossier')->constrained('types_dossiers','id')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_type_support')->constrained('types_supports','id_type_support')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_etat_dossier')->constrained('etats_dossier','id_etat_dossier')->onUpdate('cascade')->onDelete('cascade');
            $table->string('numero_provisoir')->nullable();
            $table->integer('num_article')->nullable();
            $table->string('intitule')->nullable();
            $table->string('cote_topographique')->nullable();
            $table->string('cote_thematique')->nullable();
            $table->string('cote_versement')->nullable();
            $table->string('notes')->nullable();
            $table->integer('communicabilite')->nullable();
            $table->dateTime('date_communicabilite')->nullable();
            $table->integer('tri_elimination')->nullable();
            $table->integer('elimination_echantillionnage')->nullable();
            $table->string('support_transfert')->nullable();
            $table->string('bordereau_rempli_par')->nullable();
            $table->string('bordereau_saisi_par')->nullable();
            $table->dateTime('date_saisie')->nullable();
            $table->boolean('recupere')->nullable();
            $table->boolean('public')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dossiers');
    }
};

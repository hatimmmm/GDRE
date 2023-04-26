<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dossier extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_dossier';

    protected $fillable = [
        'id_plan_classement',
            'num_versement',
            'id_type_dossier',
            'id_type_support',
            'id_etat_dossier',
            'numero_provisoir',
            'num_article',
            'intitule',
            'cote_topographique',
            'cote_thematique',
            'cote_versement',
            'notes',
            'communicabilite',
            'support_transfert',
            'rempli_par',
            'saisi_par',
            'date_saisie',
    ];

    public function sousDossier()
    {
        return $this->hasMany(SousDossier::class,'id_dossier','id_dossier');
    }

    public function descripteursThematiques()
    {
        return $this->belongsToMany(DescripteursThematique::class,'dossier_thematique','id_dossier','id_descripteur_thematique','id_dossier','id_descripteur_thematique');
    }
}


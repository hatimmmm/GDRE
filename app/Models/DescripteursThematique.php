<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DescripteursThematique extends Model
{
    use HasFactory;

    protected $fillable=[
        'descripteur_thematique',
        'objet_ou_action',
        'voir',
        'voir_aussi',
        'commentaire'
    ];

    protected $primaryKey='id_descripteur_thematique';


    public function dossiers()
    {
        return $this->belongsToMany(Dossier::class,'dossier_thematique','id_descripteur_thematique','id_dossier','id_descripteur_thematique','id_dossier');
    }


}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SDResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_sous_dossier'=>$this->id_sous_dossier,
            'id_dossier'=>$this->id_dossier,
            'num'=>$this->num,
            'num_dossier'=>$this->num_dossier,
            'titre'=>$this->titre,
            'sous_titre'=>$this->sous_titre,
            'date_debut'=>$this->date_debut,
            'date_fin'=>$this->date_fin,
            'num_identifiant'=>$this->num_identifiant,
            'auteur'=>$this->auteur,
            'nombre_copies'=>$this->nombre_copies,
            'manquant'=>$this->manquant,
            'intitule_num_identifiant'=>$this->intitule_num_identifiant,
            'oservation'=>$this->oservation,
            'id_sous_sossier'=>$this->id_sous_sossier,
        ];
    }
}

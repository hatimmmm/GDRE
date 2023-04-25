<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SousDossier extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_sous_dossier';

    protected $fillable = [
            'id_dossier',
            'num',
            'titre',
            'sous_titre',
            'date_debut',
            'date_fin',
            'num_identifiant',
            'auteur',
            'nombre_copie',
    ];
}

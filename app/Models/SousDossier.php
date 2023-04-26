<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function dossier(): BelongsTo
    {
        return $this->belongsTo(Dossier::class,'id_dossier','id_dossier');
    }

    public function exemplaires()
    {
        return $this->hasMany(ExemplaireSD::class,'id_sous_dossier','is_sous_dossier');
    }
}

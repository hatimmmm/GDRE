<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExemplaireSD extends Model
{
    use HasFactory;

    protected $table = 'exemplaires_sd';

    protected $primaryKey= 'id_exemplaire';

    protected $fillable = [
        'id_sous_dossier',
        'cote_topo',
        'exclu_du_pret',
        'observation',
        'disponibilite'
    ];

    public function sousDossier()
    {
        return $this->belongsTo(SousDossier::class,'id_sous_dossier','id_sous_dossier');
    }
}

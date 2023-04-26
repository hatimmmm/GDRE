<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DescripteursGeographique extends Model
{
    use HasFactory;
    protected $fillable=[
        'descripteur_geographique',
        'qualite',
        
    ];

    protected $primaryKey='id_descripteur_geographique';

    public function dossiers()
    {
        return $this->belongsToMany(Dossier::class,'dossier_geographique','id_descripteur_geographique','id_dossier','id_descripteur_geographique','id_dossier');
    }


}

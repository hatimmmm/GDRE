<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EtatsDossier extends Model
{
    use HasFactory;
    protected $fillable=[
        'etat_dossier'
    ];

    protected $primaryKey= 'id_etat_dossier';

}

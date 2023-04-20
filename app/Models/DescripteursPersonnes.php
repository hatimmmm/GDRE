<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DescripteursPersonnes extends Model
{
    use HasFactory;
    protected $fillable=[
        'abrege',
        'descripteur_personne',
        
        
    ];

    protected $primary='id_descripteur_personne';
}

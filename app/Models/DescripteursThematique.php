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

    protected $primary='id_descripteur_thematique';
}

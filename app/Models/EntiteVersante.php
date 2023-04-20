<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntiteVersante extends Model
{
    use HasFactory;

    protected $fillable=
    [
        'entite_versante'
    ];

    protected $primaryKey = 'id_entite_versante';

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntiteVersante extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_entite_versante';

    protected $fillable=
    [
        'entite_versante'
    ];

    public function versement()
    {
        return $this->hasMany(Versement::class,'id_entite_versante','id_entite_versante');
    }

}

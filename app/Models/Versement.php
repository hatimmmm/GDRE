<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Versement extends Model
{
    use HasFactory;

    protected $primaryKey= 'num_versement';

    protected $fillable = [
        'date_versement',
        'id_entite_versante',

    ];

    public function entiteVersante()
    {
        return $this->belongsTo(EntiteVersante::class,'id_entite_versante','id_entite_versante');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emprunteur extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_emprunteur';

    
    protected $fillable = [
        'nom',
        'prenom',
        'tel',
        'emprunteur',
    ];


    public function emprunts(){
        return $this->hasMany(Emprunt::class,'id_emprunteur','id_emprunteur');
    }
}

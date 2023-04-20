<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emprunteur extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nom',
        'prenom',
        'tel',
        'emprunteur',
    ];

    protected $primaryKey = 'id_emprunteur';
}

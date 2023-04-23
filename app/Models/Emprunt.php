<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Emprunteur;

class Emprunt extends Model
{
    use HasFactory;
    
    protected $primaryKey = 'id_emprunt';

    // protected $guarded = ['id_emprunteur'];

    protected $fillable = [
        'id_emprunteur',
        'date_emprunt',
        'observation',
    ];




    public function emprunteur()
    {
        return $this->belongsTo(Emprunteur::class,'id_emprunteur','id_emprunteur');
    }
}

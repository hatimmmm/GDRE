<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypesDossier extends Model
{
    use HasFactory;

    protected $fillable=[
        'type_dossier'
    ];

    protected $primary= 'id_type_dossier';
}

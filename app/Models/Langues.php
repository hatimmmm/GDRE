<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Langues extends Model
{
    use HasFactory;

    use HasFactory;
    protected $fillable=[
        'langue'
    ];

    protected $primary= 'id_langue';
}

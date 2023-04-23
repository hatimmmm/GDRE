<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypesSupport extends Model
{
    use HasFactory;
    protected $fillable=[
        'type_support'
    ];

    protected $primaryKey= 'id_type_support';
}

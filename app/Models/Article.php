<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'code_topographique',
        'type_article',
        'observation'
    ];
    protected $primaryKey = 'id_article';

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanClassement extends Model
{
    use HasFactory;
    protected $fillable = 
    [
        'plan_classement'
    ];

    protected $primary = 'code_plan_classement';
}

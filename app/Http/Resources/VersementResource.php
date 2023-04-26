<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VersementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'num_versement'=>$this->num_versement,
            'id_entite_versante'=>$this->id_entite_versante,
            'date_versement'=>$this->date_versement
        ];
    }
}

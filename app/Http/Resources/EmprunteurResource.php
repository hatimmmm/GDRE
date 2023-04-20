<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmprunteurResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_emprunteur'=>$this->id_emprunteur,
            'nom'=>$this->nom,
            'prenom'=>$this->prenom,
            'tel'=>$this->tel,
            'emprunteur'=>$this->emprunteur
        ];
    }
}

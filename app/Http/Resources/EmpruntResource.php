<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmpruntResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_emprunt' => $this->id_emprunt,
            'date_emprunt' => $this->date_emprunt,
            'observation' => $this->observation,
            'id_emprunteur'=>$this->id_emprunteur
        ];
    }
}

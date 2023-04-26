<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDossierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'id_plan_classement'=>'integer',
            'num_versement'=>'integer',
            'id_type_dossier'=>'integer',
            'id_type_support'=>'integer',
            'id_etat_dossier'=>'integer',
            'numero_provisoir'=>'string',
            'num_article'=>'integer',
            'intitule'=>'string',
            'cote_topographique'=>'string',
            'cote_thematique'=>'string',
            'cote_versement'=>'string',
            'notes'=>'string',
            'communicabilite'=>'integer',
            'support_transfert'=>'string',
            'rempli_par'=>'string',
            'saisi_par'=>'string',
            'date_saisie'=>'date',
            'id_descripteur_thematique'=>'integer',
            'qualite'=>'string'
        ];
    }
}

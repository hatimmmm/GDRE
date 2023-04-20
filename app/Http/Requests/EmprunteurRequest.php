<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmprunteurRequest extends FormRequest
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
            
                'nom'=>'string|max:50',
                'prenom'=>'string|max:50',
                'tel'=>'string|size:10',
                'emprunteur'=>'string|max:50',
            
        ];
    }
}

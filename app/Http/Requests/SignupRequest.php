<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nom'=> 'required|string|max:55',
            'prenom'=> 'required|string|max:55',
            'email'=>'required|email|unique:users,email',
            'tel'=>'required|numeric|unique:users,tel',
            'role'=>'required|integer',
            'password'=>[
                'required',
                'confirmed',
                Password::min(8)->letters()->symbols()
            ]        
        ];
    }
}

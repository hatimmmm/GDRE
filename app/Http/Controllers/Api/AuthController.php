<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller

{
    public function login(LoginRequest $request)
    {

        $credentials = $request ->validated();
        if(!Auth::attempt($credentials)){
            return response(['message'=>'provided email adress or password is incorrect'],422);
        }
        /** @var User  $user */

        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        if($user->hasRole('administrateur'))
        {
            return response('admin dash');
        }
        elseif($user->hasRole('archiviste'))
        {
            return response('archiviste dash');
        }
        elseif($user->hasRole('utilisateur'))
        {
            return response('user dash');
        }
        
        
        
    }
   
    public function logout(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $token=$user->currentAccessToken()->delete();
        return response($token);
        
    }
};
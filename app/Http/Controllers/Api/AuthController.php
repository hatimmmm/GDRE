<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\Role;
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
        $user->load(['roles']);



        return response(compact('user','token'),200);
        
        
        
    }
   
    public function logout()
    {
        /** @var User $user */
        $user= Auth::user();
        $user->tokens()->delete();

        return ['message'=>'user loed out',$user];
        
    }
};
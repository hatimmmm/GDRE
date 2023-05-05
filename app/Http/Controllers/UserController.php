<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Contracts\Support\ValidatedData;
use Illuminate\Http\Request;
use Nette\Schema\Message;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserResource::collection(User::with('roles')->get());
    }

    public function store(SignupRequest $request)
    {
        $data = $request ->validated();

        $user = new User;
        $user->nom = $data['nom'];
        $user->prenom = $data['prenom'];
        $user->email = $data['email'];
        $user->tel = $data['tel'];
        $user->password = bcrypt($data['password']);
        $user->save();
        $user->addRole($data['role']);
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }

    public function show(string $id)
    {
        $user = User::find($id);
        if(!$user){
            return response('utilisateur introuvable',404);
        }
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        };
        $data = $request->validated();
        if(isset($data['nom']))
        {
            $user->nom=$data['nom'];
        }
        if(isset($data['prenom']))
        {
            $user->prenom=$data['prenom'];
        }
        if(isset($data['email']))
        {
            $user->email=$data['email'];
        }
        if(isset($data['tel']))
        {
            $user->tel=$data['tel'];
        }
        if(isset($data['password']))
        {
        $user->password=bcrypt($data['password']);
        }
        $user->update();

        return response(['message'=>'Utilisateur modifie',$user],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();

        return response('user deleted successfully',200);
    }
}

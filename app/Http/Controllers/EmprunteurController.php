<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmprunteurRequest;
use App\Http\Resources\emprunteurResource;
use App\Models\Emprunteur;
use Illuminate\Http\Request;

class EmprunteurController extends Controller
{
    
    public function index()
    {
        return EmprunteurResource::collection(Emprunteur::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nom'=>'required|string|max:50',
            'prenom'=>'required|string|max:50',
            'tel'=>'string|size:10',
            'emprunteur'=>'string|max:50',
        ]);

        $emprunteur = new Emprunteur;
        $emprunteur->nom=$data['nom'];
        $emprunteur->prenom=$data['prenom'];
        $emprunteur->tel=$data['tel'];
        $emprunteur->emprunteur=$data['emprunteur'];
        $emprunteur->save();

        return response(['message'=>'emprunteur cree'],200);
    }

    public function show($id)
    {
        $emprunteur = Emprunteur::find($id);
        if(!$emprunteur){
            return response('utilisateur introuvable',404);
        }
        return new EmprunteurResource($emprunteur);
    }

    public function update(EmprunteurRequest $request,$id)
    {
        
        $emprunteur = Emprunteur::find($id);

        if (!$emprunteur) {
            return response()->json(['message' => 'User not found'], 404);
        };

        $data = $request->validated();
        
        if(isset($data['nom']))
        {
            $emprunteur->nom=$data['nom'];           
        }
        if(isset($data['prenom']))
        {
            $emprunteur->prenom=$data['prenom'];            
        }
        if(isset($data['tel']))
        {
            $emprunteur->tel=$data['tel'];
        }
        if(isset($data['emprunteur']))
        {
            $emprunteur->emprunteur=$data['emprunteur'];          
        }

        $emprunteur->update();
        return response($emprunteur,200);
    }

    public function destroy($id)
    {
        Emprunteur::find($id)->delete();

        return response(['message'=>'emprunteur supprime'],200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmpruntResource;
use App\Models\Emprunt;
use App\Models\Emprunteur;
use Illuminate\Http\Request;

class EmpruntController extends Controller
{
    public function index()
    {
        return EmpruntResource::collection(Emprunt::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'id_emprunteur'=>'required|integer',
            'date_emprunt'=>'required|date',
            'observation'=>'string',
            'id_exemplaire'=>'integer',
            'duree_pret'=>'integer',
            'date_retour_prevu'=>'date',
            'date_retour'=>'date',
            'motif_retard'=>'string',
            'valid_retour'=>'boolean',
            'observation'=>'string',

        ]);

        $emprunt = new Emprunt;

        $emprunt->id_emprunteur = $data['id_emprunteur'];
        $emprunt->date_emprunt = $data['date_emprunt'];
        $emprunt->observation = $data['observation'];

        $emprunt->save();

        $emprunt->exemplairesSD()->attach($data['id_exemplaire'],[
            'duree_pret'=>$data['duree_pret'],
            'date_retour_prevu'=> $data['date_retour_prevu'],
            'date_retour'=>$data['date_retour'],
            'motif_retard'=>$data['motif_retard'],
            'valid_retour'=>$data['valid_retour'],
            'observation'=>$data['observation']
            ]
            
        );

        return response(['message'=>'emprunt cree',$emprunt],200);

    }

    
    public function show($id)
    {
        $emprunt = Emprunt::find($id); 

        return response($emprunt);   
    }

    
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'id_emprunteur'=>'integer',
            'date_emprunt'=>'date',
            'observation'=>'string'
        ]);

        if(!Emprunteur::find($data['id_emprunteur'])){
            return response(['message'=>'emprunteur introuvable']);
        }else
        {
            $emprunt = Emprunt::find($id);
            if(isset($data['id_emprunteur'])){
                $emprunt->id_emprunteur=$data['id_emprunteur'];
            }
            if(isset($data['date_emprunt'])){
                $emprunt->date_emprunt=$data['date_emprunt'];
            }
            if(isset($data['observation'])){
                $emprunt->observation=$data['observation'];
            }
    
            $emprunt->update();
        }

        

        return response(['message'=>'emprunt updated',$emprunt]);
    }

    public function destroy($id)
    {
        $emprunt = Emprunt::find($id);
        $emprunt->delete();

        return response(['message'=>'emprunt supprime']);
    }
}

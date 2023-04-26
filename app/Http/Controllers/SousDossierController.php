<?php

namespace App\Http\Controllers;

use App\Http\Resources\SDResource;
use App\Models\Dossier;
use App\Models\SousDossier;
use Illuminate\Http\Request;

class SousDossierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return SDResource::collection(SousDossier::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'id_dossier'=>'required|integer',
            'num'=>'integer',
            'titre'=>'string',
            'sous_titre'=>'string',
            'date_debut'=>'date',
            'date_fin'=>'date',
            'num_identifiant'=>'string',
            'auteur'=>'string',
            'nombre_copie'=>'string',
        ]);

        $sousDossier = new SousDossier();
        if(isset($data['id_dossier'])){
            if(!Dossier::find($data['id_dossier']))
        {
            return response('dossier introuvable',400);
        }
        }

        $sousDossier->num=$data['num'];
        $sousDossier->id_dossier=$data['id_dossier'];
        $sousDossier->titre=$data['titre'];
        $sousDossier->sous_titre=$data['sous_titre'];
        $sousDossier->date_debut=$data['date_debut'];
        $sousDossier->date_fin=$data['date_fin'];
        $sousDossier->num_identifiant=$data['num_identifiant'];
        $sousDossier->auteur=$data['auteur'];
        $sousDossier->nombre_copies=$data['num'];
        
        $sousDossier->save();

        return response(['message'=>'sous dossier cree',$sousDossier],200); 
    }


    public function show( $id)
    {
        $sousDossier = SousDossier::find($id);
        return new SDResource($sousDossier);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $sousDossier = SousDossier::find($id);
        $data = $request->validate([
            'id_dossier'=>'integer',
            'num'=>'integer',
            'titre'=>'string',
            'sous_titre'=>'string',
            'date_debut'=>'date',
            'date_fin'=>'date',
            'num_identifiant'=>'string',
            'auteur'=>'string',
            'nombre_copie'=>'string',
        ]);

        
            if(isset($data['id_dossier'])){
                if(!Dossier::find($data['id_dossier']))
            {
                return response('dossier introuvable',400);
            }
                $sousDossier->id_dossier=$data['id_dossier'];
            }
            if(isset($data['num'])){
                $sousDossier->num=$data['numnum_dossier'];
            }
            if(isset($data['titre'])){
                $sousDossier->titre=$data['titre'];
            }
            if(isset($data['sous_titre'])){
                $sousDossier->sous_titre=$data['sous_titre'];
            }
            if(isset($data['date_debut'])){
                $sousDossier->date_debut=$data['date_debut'];
            }
            if(isset($data['date_fin'])){
                $sousDossier->date_fin=$data['date_fin'];
            }
            if(isset($data['num_identifiant'])){
                $sousDossier->num_identifiant=$data['num_identifiant'];
            }
            if(isset($data['nombre_copies'])){
                $sousDossier->nombre_copies=$data['nombre_copies'];
            }
            if(isset($data['auteur'])){
                $sousDossier->auteur=$data['auteur'];
            }
        

        $sousDossier->update();
        return response(['message'=>'sous_sossier',$sousDossier],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $sousDossier = SousDossier::find($id);
        $sousDossier->delete();

        return response('sous dossier supprime');
    }
}

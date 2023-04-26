<?php

namespace App\Http\Controllers;

use App\Http\Resources\ExemplaireSDResource;
use App\Models\ExemplaireSD;
use App\Models\SousDossier;
use Illuminate\Http\Request;

class ExemplaireSDController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ExemplaireSDResource::collection(ExemplaireSD::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'id_sous_dossier'=>'required|integer',
            'cote_topo'=>'string',
            'exclu_du_pret'=>'boolean',
            'observation'=>'string',
            'disponibilite'=>'boolean',
        ]);

        $exemplaire = new ExemplaireSD();

        if(!SousDossier::find($data['id_sous_dossier'])){
            return response('sous dossier introuvable');
        }

        $exemplaire->id_sous_dossier= $data['id_sous_dossier'];
        $exemplaire->cote_topo= $data['cote_topo'];
        $exemplaire->exclu_du_pret= $data['exclu_du_pret'];
        $exemplaire->observation= $data['observation'];
        $exemplaire->disponibilite= $data['disponibilite'];

        $exemplaire->save();

        return response(['message'=>'exemplaire cree',$exemplaire],200);

    }

    public function show($id)
    {
        $exemplaire=ExemplaireSD::find($id);
        return new ExemplaireSDResource($exemplaire);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $data = $request->validate([
            'cote_topo'=>'string',
            'exclu_du_pret'=>'boolean',
            'observation'=>'string',
            'disponibilite'=>'boolean',
        ]);

        $exemplaire = ExemplaireSD::find($id);

        if(isset($data['id_sous_dossier'])||SousDossier::find($data['id_sous_dossier']))
        {
            $exemplaire->id_sous_dossier=$data['id_sous_dossier'];
        }
        else
        {
            return response('sous dossier introuvable');
        }
        if(isset($data['cote_topo'])){
            $exemplaire->cote_topo=$data['cote_topo'];
        }
        if(isset($data['exclu_du_pret'])){
            $exemplaire->exclu_du_pret=$data['exclu_du_pret'];
        }
        if(isset($data['observation'])){
            $exemplaire->observation=$data['observation'];
        }
        if(isset($data['disponibilite'])){
            $exemplaire->disponibilite=$data['disponibilite'];
        }

        $exemplaire->update();

        return response(['message'=>'exemplaire modifie',$exemplaire],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $exemplaire = ExemplaireSD::find($id);
        $exemplaire->delete();

        return response('exemplaire supprime',200);
    }
}

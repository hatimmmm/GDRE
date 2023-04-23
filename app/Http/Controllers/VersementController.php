<?php

namespace App\Http\Controllers;

use App\Http\Resources\VersementResource;
use App\Models\EntiteVersante;
use App\Models\Versement;
use Illuminate\Http\Request;

class VersementController extends Controller
{
    public function index()
    {
        return VersementResource::collection(Versement::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'num_versement'=>'required|integer',
            'id_entite_versante'=>'required|integer',
            'date_versement'=>'required|date',
        ]);

        if(!EntiteVersante::find($data['id_entite_versante'])){
            return response(['message'=>'entite versante introuvable']);
        }else
        {
            $versement = new Versement();

        $versement->num_versement = $data['num_versement'];
        $versement->id_entite_versante = $data['id_entite_versante'];
        $versement->date_versement = $data['date_versement'];
        }

        

        $versement->save();

        return response(['message'=>'versement cree',$versement],200);

    }

    
    public function show($id)
    {
        $versement = Versement::find($id); 

        if(!$versement)
        {
            return response(['message'=>'versement introuvable'],400);
        }

        return response([$versement,$versement->entiteVersante]);   
    }

    
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'num_versement'=>'integer',
            'id_entite_versante'=>'integer',
            'date_versement'=>'date',
        ]);
        $versement = Versement::find($id);
        if(!$versement)
        {
                return response(['message'=>'versement introuvable']);
        }
        elseif(!EntiteVersante::find($data['id_entite_versante']))
        {
            return response(['message'=>'entite versante introuvable']);
        }
            
        else{
            if(isset($data['num_versement'])){
                $versement->num_versement=$data['num_versement'];
            }
            if(isset($data['id_entite_versante'])){
                $versement->id_entite_versante=$data['id_entite_versante'];
            }
            if(isset($data['date_versement'])){
                $versement->date_versement=$data['date_versement'];
            }
        }
                                        
        $versement->update();
        return response(['message'=>'versement updated',$versement]);
        }


        
    public function destroy($id)
    {
        $versement = Versement::find($id);
        $versement->delete();

        return response(['message'=>'versement supprime']);
    }
}

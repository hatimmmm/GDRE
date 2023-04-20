<?php

namespace App\Http\Controllers;

use App\Http\Resources\EntiteVersanteResource;
use App\Models\EntiteVersante;
use Illuminate\Http\Request;
use League\CommonMark\Extension\CommonMark\Parser\Inline\EntityParser;

class EntiteVersanteController extends Controller
{
    public function index()
    {
        return EntiteVersanteResource::collection(EntiteVersante::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'entite_versante'=>'required|string|max:150',
        ]);

        $entite = new EntiteVersante();
        $entite->entite_versante = $data['entite_versante'];
        $entite->save();

        return response(['message'=>'Entite versante cree'],200);
    }

    public function show($id)
    {
        $entite = EntiteVersante::find($id);
        if(!$entite){
            return response('utilisateur introuvable',404);
        }
        return new EntiteVersanteResource($entite);
    }

    public function update(Request $request, $id)
    {
        $entite = EntiteVersante::find($id);

        if (!$entite) {
            return response()->json(['message' => 'User not found'], 404);
        };

        $data = $request->validate([
            'entite_versante'=>'|string|max:150',
        ]);

        $entite->entite_versante=$data['entite_versante'];
        $entite->update();
        return response($entite,200);
    }

    public function destroy($id)
    {
        EntiteVersante::where('id_entite_versante',$id)->delete();
        
        return response(['message'=>'entite versante supprimee'],200);
    }
}

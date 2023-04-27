<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDossierRequest;
use App\Models\Dossier;
use Illuminate\Http\Request;
use App\Http\Resources\DossierResource;
use App\Models\EtatsDossier;
use App\Models\PlanClassement;
use App\Models\SousDossier;
use App\Models\TypesDossier;
use App\Models\TypesSupport;
use App\Models\Versement;
use Illuminate\Database\Eloquent\Collection;
class DossierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DossierResource::collection(Dossier::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDossierRequest $request)
    {
        $data = $request->validated();
        $dossier = new Dossier;
        $dossier->id_plan_classement = $data['id_plan_classement'];
        $dossier->num_versement = $data['num_versement'];
        $dossier->id_type_dossier = $data['id_type_dossier'];
        $dossier->id_type_support = $data['id_type_support'];
        $dossier->id_etat_dossier = $data['id_etat_dossier'];
        $dossier->numero_provisoir = $data['numero_provisoir'];
        $dossier->num_article = $data['num_article'];
        $dossier->intitule = $data['intitule'];
        $dossier->cote_topographique = $data['cote_topographique'];
        $dossier->cote_thematique = $data['cote_thematique'];
        $dossier->cote_versement = $data['cote_versement'];
        $dossier->notes = $data['notes'];
        $dossier->communicabilite = $data['communicabilite'];
        $dossier->support_transfert = $data['support_transfert'];
        $dossier->bordereau_rempli_par = $data['rempli_par'];
        $dossier->bordereau_saisi_par = $data['saisi_par'];
        $dossier->date_saisie = $data['date_saisie'];
        $dossier->save();
        $dossier->descripteursThematiques()->attach($data['id_descripteur_thematique'],['qualite'=>$data['qualite_des_them']]);
        $dossier->descripteursPersonnes()->attach($data['id_descripteur_personne'],['qualite'=>$data['qualite_des_pers']]);
        $dossier->descripteursGeographiques()->attach($data['id_descripteur_geographique'],['qualite'=>$data['qualite_des_geo']]);
        $dossier->articles()->attach($data['id_article']);
        $dossier->langues()->attach($data['id_langue'],['qualite'=>$data['qualite_langue']]);

        return response(['message'=>'dossier cree',$dossier]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $dossier = Dossier::with('sousDossier')->find($id);
        if(!$dossier)
        {
            return response(['message'=>'dossier introuvable'],400);
        }
        return new DossierResource($dossier);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreDossierRequest $request,$id)
    {
        $dossier = Dossier::find($id);
        $data= $request->validated();
        if(!$dossier)
        {
            return response('dossier introuvable',400);
        }else
        {
            if(isset($data['id_plan_classement'])){
                if(!PlanClassement::find($data['id_plan_classement'])){
                    return response('plan de classement introuvable');
                }
                $dossier->id_plan_classement = $data['id_plan_classement'];
            }
            if(isset($data['num_versement'])){
                if(!Versement::find($data['num_versement'])){
                    return response('versement introuvable');
                }
                $dossier->num_versement = $data['num_versement'];
            }
            if(isset($data['id_type_dossier'])){
                if(!TypesDossier::find($data['id_type_dossier'])){
                    return response('type  dossier introuvable');
                }
                $dossier->id_type_dossier = $data['id_type_dossier'];
            }
            if(isset($data['id_type_support'])){
                if(!TypesSupport::find($data['id_type_support'])){
                    return response('type support introuvable');
                }
                $dossier->id_type_support = $data['id_type_support'];
            }
            if(isset($data['id_etat_dossier'])){
                if(!EtatsDossier::find($data['id_etat_dossier'])){
                    return response('etat dossier introuvable');
                }
                $dossier->id_etat_dossier = $data['id_etat_dossier'];
            }
            if(isset($data['numero_provisoir'])){
                $dossier->numero_provisoir = $data['numero_provisoir'];
            }
            if(isset($data['num_article'])){
                $dossier->num_article = $data['num_article'];
            }
            if(isset($data['intitule'])){
                $dossier->intitule = $data['intitule'];
            }
            if(isset($data['cote_topographique'])){
                $dossier->cote_topographique = $data['cote_topographique'];
            }
            if(isset($data['cote_thematique'])){
                $dossier->cote_thematique = $data['cote_thematique'];
            }
            if(isset($data['cote_versement'])){
                $dossier->cote_versement = $data['cote_versement'];
            }
            if(isset($data['notes'])){
                $dossier->notes = $data['notes'];
            }
            if(isset($data['communicabilite'])){
                $dossier->communicabilite = $data['communicabilite'];
            }
            if(isset($data['support_transfert'])){
                $dossier->support_transfert = $data['support_transfert'];
            }
            if(isset($data['rempli_par'])){
                $dossier->rempli_par = $data['rempli_par'];
            }
            if(isset($data['saisi_par'])){
                $dossier->saisi_par = $data['saisi_par'];
            }
            if(isset($data['date_saisie'])){
                $dossier->date_saisie = $data['date_saisie'];
            }
        }

        $dossier->update();
        return response(['message'=>'dossier updated',$dossier],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $dossier=Dossier::find($id);
        $dossier->delete();

        return response('dossier supprime',200);
    }
}

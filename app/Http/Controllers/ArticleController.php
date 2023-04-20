<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return ArticleResource::collection(Article::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'cote_topographique'=>'required|string|max:50',
            'type_article'=>'required|string|max:50',
            'observation'=>'string',
        ]);

        $article = new Article();
        $article->cote_topographique=$data['cote_topographique'];
        $article->type_article=$data['type_article'];
        $article->observation=$data['observation'];
        
        $article->save();

        return response(['message'=>'article cree',$article],200);
    }

    public function show($id)
    {
        $article = Article::find($id);
        if(!$article){
            return response('article introuvable',404);
        }
        return new ArticleResource($article);
    }

    public function update(Request $request, $id)
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json(['message' => 'article introuvable'], 404);
        };
        $data = $request->validate([
            'cote_topographique'=>'required|string|max:50',
            'type_article'=>'required|string|max:50',
            'observation'=>'string',
        ]);
        if(isset($data['cote_topographique']))
        {
            $article->cote_topographique=$data['cote_topographique'];
        }
        if(isset($data['type_article']))
        {
            $article->type_article=$data['type_article'];
        }
        if(isset($data['observation']))
        {
            $article->observation=$data['observation'];
        }
        $article->update();

        return response($article,200);
    }

    public function destroy($id)
    {
        Article::where('id_article',$id)->delete();
        return response(['message'=>'article supprime'],200);
    }
}

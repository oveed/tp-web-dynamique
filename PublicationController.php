<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
    public function index(){
        $pubs = Publication::all();
        return response()->json($pubs);
    }

    public function create()
    {
        
    }
    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'image_path' => 'required|string|max:355',
            'categorie' => 'required|string|max:255',
        ]);
        $post = Publication::create($request->all());
        return response()->json($post, 201);
    }
    public function show(Publication $pubs){
       
    }
    public function edit(Publication $pubs){
       
    }
    public function update(Request $request, $id){
    $request->validate([
        'titre' => 'sometimes|required|string|max:255',
        'description' => 'sometimes|required|string|max:255',
        'categorie' => 'sometimes|required|string|max:255',
        'image_path' => 'sometimes|required|string|max:255',
    ]);
    // J'ai utilisé 'sometimes' dans le cas où le champ n'est pas fourni donc il n'est pas obligatoire de l'inclure dans la requête de modification.
    $pub = Publication::find($id);  
    if (!$pub) {
        return response()->json(['message' => "Publication n'existe pas"], 404);
    }
    $pub->update($request->all());
    return response()->json($pub);
}

    public function destroy($id){
    $pub = Publication::find($id);
    if (!$pub) {
        return response()->json(['message' => 'Publication pas trouvée'], 404);
    }
    $pub->delete();
    return response()->json(['message' => 'Publication supprimée avec succès'], 200);
    }
}

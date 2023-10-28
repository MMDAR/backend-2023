<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public $animals = ["Beruang","Ayam"];
    public function index()
    {
        echo "Menampilkan data animals <br>";
        //loop property animals
        foreach ($this->animals as $animal){
            echo "$animal<br>";
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        //menambahkan data ke properti animals
        array_push($this->animals, $request->animal);

        //panggil method index
        $this->index();
        //method get
        // echo "Nama hewan: $request->nama";
        // echo "<br>";
        // echo "Menambahkan hewan baru";    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function update($id, Request $request)
    {
        //
        echo "Mengupdate data hewan id $id <br>";
        $this->animals[$id] = $request->animal;

        //panggil method index
        $this->index();

    }

    /**
     * Display the specified resource.
     */

    /**
     * Show the form for editing the specified resource.
     */
    public function destroy($id, Request $request)
    {
        echo "Menghancurkan data hewan id $id<br>";
        unset($this->animals[$id]);
        $this->index();
        
    }
}

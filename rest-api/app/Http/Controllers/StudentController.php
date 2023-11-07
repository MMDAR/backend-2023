<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Membuat method index
    public function index()
    {
        // Menggunakan Model Student untuk select data
        $students = Student::all();
        $data = [
            'message' => 'Get All Students',
            'data' => $students
        ];

        // jika data kosong
        if ($students->isEmpty()) {
            $data =[
                'message'=> 'kosong',
            ];
            return response()->json($data,204);
        }

        // Mengirim data (json) dan kode 200
        return response()->json($data, 200);
    }

    public function show($id){
    $student = Student::find($id);
       if (!$student) {
    $data = [
        'message'=> 'Data not found'
        ];
        return response()->json($data,404);
    }
    $data = [
        'message'=> 'Show detail resource',
        'data'=> $student
        ];
        return response()->json($data,200);
    }7
    public function store(Request $request)
    {

        // validasi data request
        $request->validate([
            "nama" => "required",
            "nim" => "required",
            "email" => "required",
            "jurusan" => "required",
        ]);

        // Menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];


        // Menggunakan model Student
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];

        // Mengembalikan data (JSON) dan kode 201
        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            $data =[
                'message' => 'Student not found'
            ];
            return response()->json($data, 404);
        }

        // $student->nama = $request->input('nama', $student->nama);
        // $student->nim = $request->input('nim', $student->nim);
        // $student->email = $request->input('email', $student->email);
        // $student->jurusan = $request->input('jurusan', $student->jurusan);
        $student->update([
        'nama' => $request->nama ?? $student->nama,
        'nim' => $request->nim ?? $student->nim,
        'email' => $request->email ?? $student->email,
        'jurusan' => $request->jurusan ?? $student->jurusan

        // $student->save();
        ]);
        $data = [
            'message' => 'Student is updated successfully',
            'data' => $student,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        $data = [
            'message' => 'Student has been deleted successfully',
        ];

        return response()->json($data, 200);
    }
}

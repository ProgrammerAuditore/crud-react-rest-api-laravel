<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;


class StudentController extends Controller
{

    public function index(){
        // * Obtener todos los datos de la base de datos
        $students = Student::all();

        /* Enviar los datos a través de response en forma json */
        return response()->json([
            'status' => 200,
            'students' => $students,
        ]);
    }

    // Función para guardar datos en la tabla de la base de datos
    public function store(Request $request){
        
        $student = new Student;
        $student->name = $request->input('name');
        $student->lastname = $request->input('lastname');
        $student->email = $request->input('email');
        $student->age = $request->input('age');
        $student->save();

        return response()->json([
            'status' => 200,
            'message' => 'Student Added Successfully'
        ]);
    }
}

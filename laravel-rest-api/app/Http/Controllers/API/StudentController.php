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

    public function edit($id){
        $student = Student::find($id);
        if( $student != NULL ){
            $response = ["status" => 200, "student" => $student];
        }else {
            $response = ["status" => 403, "student" => NULL];
        }

        return response()->json($response);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);
        $student->name = $request['name'];
        $student->lastname = $request['lastname'];
        $student->email = $request['email'];
        $student->age = $request['age'];
        $student->update();

        $response = ["status" => 200, "message" => "Updated Student Successly"];
        return response()->json($response);
    }

    public function destroy($id){
        $student = Student::find($id);
        $student->delete();
        
        $response = ["status" => 200, "message" => "Student Delete Successly"];
        return response()->json($response);
    }

}

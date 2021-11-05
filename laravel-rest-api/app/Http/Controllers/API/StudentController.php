<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;


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
        
        $validator = Validator::make( $request->all() , [
            'name' => 'required|max:191',
            'lastname' => 'required|max:191',
            'email' => 'required|email|max:191',
            'age' => 'required|numeric|between:18,100',
        ]);

        if( $validator->fails() ){
            
            return response()->json([
                'validate_err' => $validator->getMessageBag(),
            ]);

        }else {

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

    public function edit($id){
        $student = Student::find($id);
        if( $student != NULL ){
            $response = ["status" => 200, "student" => $student, "message" => "Student found."];
        }else {
            $response = ["status" => 404, "student" => NULL, "message" => "Student not found."];
        }

        return response()->json($response);
    }

    public function update(Request $request, $id){

        $validator = Validator::make( $request->all() , [
            'name' => 'required|max:191',
            'lastname' => 'required|max:191',
            'email' => 'required|email|max:191',
            'age' => 'required|numeric|between:18,100',
        ]);

        if( $validator->fails() ) {
            $response = ["status" => 404, "message" => "Student not found.", "list_err" => $validator->getMessageBag()];

        }else{

            $student = Student::find($id);
            if( $student ) {
                $student->name = $request['name'];
                $student->lastname = $request['lastname'];
                $student->email = $request['email'];
                $student->age = $request['age'];
                $student->update();

                $response = ["status" => 200, "message" => "Updated Student Successly"];
            } 
            
        }

        return response()->json($response);
    }

    public function destroy($id){
        $student = Student::find($id);
        $student->delete();
        
        $response = ["status" => 200, "message" => "Student Delete Successly"];
        return response()->json($response);
    }

}

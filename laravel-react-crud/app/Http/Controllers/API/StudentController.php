<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;


class StudentController extends Controller
{
    //
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

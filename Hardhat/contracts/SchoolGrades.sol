// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract SchoolGrades {
    // Estructura para almacenar la información de una materia y la nota de un alumno
    struct SubjectGrade {
        string subjectName;
        uint grade;
    }

    // Dirección del maestro (profesor) que tiene permisos para añadir notas
    address public teacher;

    // Mapping de las notas de los alumnos por su dirección
    // La llave es la dirección del alumno, y el valor es un array de `SubjectGrade`
    mapping(address => SubjectGrade[]) public studentGrades;

    // Constructor para establecer el dueño del contrato como el maestro
    constructor() {
        teacher = msg.sender;
    }

    // Modificador para restringir ciertas funciones al maestro solamente
    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only the teacher can perform this action.");
        _;
    }

    // Función para que el maestro añada una materia con la nota de un alumno
    function addGrade(address _student, string memory _subjectName, uint _grade) public onlyTeacher {
        studentGrades[_student].push(SubjectGrade(_subjectName, _grade));
    }

    // Función para que un alumno vea sus notas
    // Devuelve un array de materias con las notas correspondientes
    function viewMyGrades() public view returns (SubjectGrade[] memory) {
        return studentGrades[msg.sender];
    }

    // Función opcional para ver las notas de un alumno específico
    // Solo puede ser llamada por el maestro
    function viewStudentGrades(address _student) public view onlyTeacher returns (SubjectGrade[] memory) {
        return studentGrades[_student];
    }

        // Función para verificar si un estudiante ha pasado todas sus materias
    function hasPassedAllSubjects(address _student) public view returns (bool) {
        SubjectGrade[] memory grades = studentGrades[_student];
        for (uint i = 0; i < grades.length; i++) {
            if (grades[i].grade < 5) { // Asume que 5 es la nota mínima para pasar
                return false;
            }
        }
        return true;
    }
}
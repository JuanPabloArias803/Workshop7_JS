//Prototipos:
// function Person(nombre, apellido, edad, profesión, hobbies) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.profesión = profesión;
//     this.hobbies = hobbies;
//   }
  
//   Person.prototype.saludar = function () {
//     return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
//   };

//   function Student(nombre, apellido, edad, promedio, cursos) {
//     Person.call(this, nombre, apellido, edad);
//     this.promedio = promedio;
//     this.cursos = cursos;
//   }
  
//   Student.prototype = Object.create(Person.prototype);
//   Student.prototype.constructor = Student;
  
//   Student.prototype.presentarExamen = function () {
//     console.log("Estoy presentando un examen.");
//   };

//   Student.prototype.saludar = function () {
//     return `${Person.prototype.saludar.call(this)} Y soy un estudiante.`;
//   };

//Clases:
//   class Person{
//     constructor(nombre,apellido,edad,profesion,hobbies){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.profesion = profesion;
//         this.hobbies = hobbies;
//     }
//     saludar(){
//         console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
//     }
//   }

//   class Student extends Person{
//     saludar(){
//         console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años y soy un estudiante.`);
//     }
//     presentarExamen(){
//         console.log("Estoy presentando un examen.");
//     }
//   }

//   const juan=new Person("juan","arias",22,"student","basketall");
//   const pablo=new Student("juan","arias",22,"student","basketall");
//   juan.saludar();
//   pablo.saludar();

//clases tienda de puntos

class Person{
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }
}

class User extends Person{
    constructor(id,name,email,password,points=0){
        super(id,name,email,password);
        this.points=points;
    }
    acumularPuntos(){

    }
    completarActividad(activityID){

    }
}

class Admin extends Person{
    constructor(id,name,email,password){
        super(id,name,email,password);
    }
    agregarProducto(productID){

    }
    modificarProducto(productID){

    }
    eliminarUsuario(userID){
    
    }
}



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
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
}

class User extends Person{
    static users = [];
    static userID = 1;
    constructor(name,email,password,points=0){
        super(name,email,password);
        this.id=User.userID;
        User.userID++;
        this.points=points;
        User.users.push({id:this.id,name,email,password,points})
    }

    completarActividad(activityID,newPoints){
        
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

class Product{
    constructor(id,nombre,precioPuntos,stock){
        this.id=id;
        this.nombreProducto=nombre;
        this.precioPuntos=precioPuntos;
        this.stock=stock;
    }

    get getInfo(){

    }

    set updateStock(newStock){

    }
}

class PhysicalProduct extends Product{
    constructor(id,nombre,precioPuntos,stock,dimensiones){
        super(id,nombre,precioPuntos,stock);
        this.dimensiones=dimensiones;
    }

    sendProduct(){

    }
}

class DigitalProduct extends Product{
    constructor(id,nombre,precioPuntos,stock,url){
        super(id,nombre,precioPuntos,stock);
        this.url=url;
    }

    downloadProduct(){

    }
}

class Activity{
    constructor(id,nombreActividad,puntosOtorgados){
        this.id=id;
        this.nombreActividad=nombreActividad;
        this.puntosOtorgados=puntosOtorgados;
    }
}

class Order{
    constructor(id,fecha){
        this.id=id;
        this.fecha=fecha;
        this.products=[];
    }

    adicionarProducto(productID){
        this.products.push()
    }

    confirmOrder(){

    }

    cancelOrder(){

    }
}

//clases entrega de comidas

class Person{
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }
}

class User extends Person{
    constructor(id,name,email,password){
        super(id,name,email,password);
    }
    realizarPedido(){

    }
    verPedidos(){

    }
}

class deliveryMan extends Person{
    constructor(id,name,email,password){
        super(id,name,email,password);
    }
    aceptarEntrega(){

    }
    completarEntrega(){

    }
}

class Dish{
    constructor(name,price,description){
        this.name=name;
        this.price=price;
        this.description=description;
    }
}

class Menu{
    constructor(platos){
        this.platos=platos;
    }
    imprimirMenu(){

    }
}

class physicalMenu extends Menu{
    constructor(platos){
        super(platos);
    }
    entregarMenu(){

    }
}

class digitalMenu extends Menu{
    constructor(platos,url){
        super(platos);
        this.url=url;
    }
    generarQR(){
        
    }
}

class Restaurant{
    constructor(name){
        this.name=name;
    }
    agregarPlato(){

    }
    eliminarPlato(){

    }
}

class phisycalRestaurant extends Restaurant{
    constructor(name,dirección){
        super(name);
        this.dirección=dirección;
    }
}

class digitalRestaurant extends Restaurant{
    constructor(name){
        super(name);
    }
}

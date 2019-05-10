//variable para guardar el contenedor del menú
var papaGarron

//variable para guardar cada element del menú
var menuData = [
    {label:"home", href:"#", style:""}, //style es la clase, label es el texto
    {label:"songs", href:"#", style:""},
    {label:"albums", href:"#", style:""},
]
//esto es una convención. Definimos cada link o ítem del menu como un objeto que tiene un conjunto de propiedades 
//(el texto, la referencia y la clase). El conjunto de links a agregar lo arreglamos en una lista o array
// la estructura de lo que me van a dar se respeta, lo que cambia es el contenido

//esta función creará cada lemento del menú
var createItem = function(item) {
    var menuItem =document.createElement ("a")
    menuItem.innerText=item.label;
    menuItem.href=item.href;
    menuItem.classList.add("menu-item")

    var li = document.createAttribute.Element("li")
    li.appendChild(menuItem)

    papaGarron.AppendChild(li)
    console.log(li)
}



var populateMenu = function () {
    //buscamos en el DOM el elemento que contendrá los ítems del menú
    papaGarron = document.getElementsByClassName ("sarasa")[0] //solo quiero un determinado elemento, si no me devuelve una lista aunque tenga 
    //unsolo elemento (espera "elementS"). No puedo hacer las mismas operaciones sobre una lisgta que sobre un elemento.
    //llamo a mi lista, con una función uqe es propia del prototipo array
    //para cada elemento, convoco a una función, y el parámetro de esa función es el elemento de la lista que estoy 
    //recorriendo en ese momento
    menuData.map(createItem(item))
}
    // data.map(function(item) {
    //     var menuItem =document.createElement ("a")
    //     menuItem.innerText=item.label;
    //     menuItem.href=item.href;
    //     console.log(menuItem)
    // })
    //map recorre cada elemento de una lista. todos.
    //recibe como parámetro otra función
    //la función especifica qué es lo que quiero hacer con cada elemento de esa lista
    //no le pongo llaves porque ya tiene una función propia del prototipo array
    //el función la puedo poner afuera (es lo que llamé createItem)
    //creo la función afuera

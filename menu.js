var papaGarron

var menuData = [
    {label:"home", href:"#", style:""}, //style es la clase, label es el texto
    {label:"songs", href:"#", style:""},
    {label:"albums", href:"#", style:""},
    ]

var populateMenu = function () {
    papaGarron = document.getElementsByClassName ("sarasa")[0] 
    
    menuData.map(function(item){
        var menuItem =document.createElement ("a")
        menuItem.innerText=item.label;
        menuItem.href=item.href;
        menuItem.classList.add("menu-item")
    
        var listItem = document.createElement("li")
        listItem.appendChild(menuItem)
      
        papaGarron.appendChild(listItem)
        })
    }
class Inmueble{
    constructor(direccion, barrio, valor, expensas, ambientes){
        this.direccion = direccion;
        this.barrio = barrio;
        this.valor = parseFloat(valor);
        this.expensas = parseFloat(expensas);
        this.ambientes = parseInt(ambientes);
    }
}
const arrayInmuebles = [];
arrayInmuebles.push (new Inmueble("25 de mayo 192", "Centro", 18000, 2500, 1));
arrayInmuebles.push (new Inmueble("24 de septiembre 1864", "General Paz", 50000, 4200, 2));
arrayInmuebles.push (new Inmueble("Emilio Olmos 324", "Centro", 150000, 9000, 4));
arrayInmuebles.push (new Inmueble("Caseros 1000", "Alberdi", 90000, 5800, 3));




/*let barrio = prompt('Barrio: ');
        for(let inmueble of arrayInmuebles.filter((el)=>el.barrio.toLowerCase().includes(barrio.toLocaleLowerCase()))){
            document.write("<ul><li>Dirección: "+inmueble.direccion+"</li>");
            document.write("<li>Barrio: "+inmueble.barrio+"</li>");
            document.write("<li>Alquiler: $"+inmueble.valor+"</li>");
            document.write("<li>Expensas: $"+inmueble.expensas+"</li>");
            document.write("<li>Cantidad de ambientes: "+inmueble.ambientes+"</li></ul>");
        }*/
let opciones;
while(true){
    opciones = prompt("Te ayudamos a encontrar tu hogar. Selecciona una opcion de filtrado: \n 1) Por Barrio \n 2) Valor de alquiler de menor a mayor \n 3) Valor de alquiler de mayor a menor \n 4) Valor total del alquiler \n 5) Ver todas los inmuebles");
    if(parseInt(opciones)>0 && parseInt(opciones)<6){
        break;
    }
    else{
        alert("El valor ingresado no es número.");
        continue;
    }
}
switch(parseInt(opciones)){
    case 1:
        let barrio = prompt('Barrio: ');
        for(let inmueble of arrayInmuebles.filter((el)=>el.barrio.toLowerCase().includes(barrio.toLocaleLowerCase()))){
            document.write("<ul><li>Dirección: "+inmueble.direccion+"</li>");
            document.write("<li>Barrio: "+inmueble.barrio+"</li>");
            document.write("<li>Alquiler: $"+inmueble.valor+"</li>");
            document.write("<li>Expensas: $"+inmueble.expensas+"</li>");
            document.write("<li>Cantidad de ambientes: "+inmueble.ambientes+"</li></ul>");
        }
    break;
    case 2:
        let valorMenorMayor = arrayInmuebles.sort((a,b)=>(a.valor > b.valor) ? 1 :(a.valor < b.valor) ? -1 : 0);
        for(let inmueble of valorMenorMayor){
            document.write("<ul><li>Dirección: "+inmueble.direccion+"</li>");
            document.write("<li>Barrio: "+inmueble.barrio+"</li>");
            document.write("<li>Alquiler: $"+inmueble.valor+"</li>");
            document.write("<li>Expensas: $"+inmueble.expensas+"</li>");
            document.write("<li>Cantidad de ambientes: "+inmueble.ambientes+"</li></ul>");
        }
    break;
    case 3:
        let valorMayorMenor = arrayInmuebles.sort((a,b)=>(a.valor < b.valor) ? 1 :(a.valor > b.valor) ? -1 : 0);
        for(let inmueble of valorMayorMenor){
            document.write("<ul><li>Dirección: "+inmueble.direccion+"</li>");
            document.write("<li>Barrio: "+inmueble.barrio+"</li>");
            document.write("<li>Alquiler: $"+inmueble.valor+"</li>");
            document.write("<li>Expensas: $"+inmueble.expensas+"</li>");
            document.write("<li>Cantidad de ambientes: "+inmueble.ambientes+"</li></ul>");
        }
    break;
    case 4:
        const valorTotal = arrayInmuebles.map((el)=>{
            return {
                direccion: el.direccion,
                barrio: el.barrio,
                ambientes: el.ambientes,
                valor: el.valor * 1.3 + el.expensas
            }
        });
        for(let inmueble of valorTotal){
            document.write("<ul><li>Dirección: "+inmueble.direccion+"</li>");
            document.write("<li>Barrio: "+inmueble.barrio+"</li>");
            document.write("<li>Cantidad de ambientes: "+inmueble.ambientes+"</li>");
            document.write("<li>Valor total del alquiler: $"+inmueble.valor+"</li><spam>*incluye la comisión del corredor para el primer mes</spam></ul>");
        }
    break;
    case 5:
        for(let inmueble of arrayInmuebles){
            document.write("<ul><li>Dirección: "+inmueble.direccion+"</li>");
            document.write("<li>Barrio: "+inmueble.barrio+"</li>");
            document.write("<li>Alquiler: $"+inmueble.valor+"</li>");
            document.write("<li>Expensas: $"+inmueble.expensas+"</li>");
            document.write("<li>Cantidad de ambientes: "+inmueble.ambientes+"</li></ul>");
        }
        break;
}

/*         let barrio = prompt('Barrio: ');
        alert(arrayInmuebles.filter((el)=>el.barrio.toLowerCase().includes(barrio.toLocaleLowerCase()))); */
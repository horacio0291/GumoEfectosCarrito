const carrito = []; //---> ACA VOY A CARGAR LOS PEDALES QUE EL USUARIO SELECCIONE

class Pedal {
  constructor(nombre, efecto, precio) {
    this.nombre = nombre;
    this.efecto = efecto;
    this.precio = precio;
  }
}; //---> PLANTILLA PARA LOS PEDALES

const totalCarrito = () => {
  let sumaTotal = 0;
  carrito.forEach((producto) => {
    sumaTotal += producto.precio;
  });
  return sumaTotal;
}; //---> ESTA FUNCIÓN ES PARA CALCULAR EL COSTO TOTAL DE LOS PEDALES SELECCIONADOS 

const mensaje = (pedalElegido) => {
  switch (pedalElegido) {
    case "nautilus":
      console.log(`${pedalNautilus.nombre} Agregado al carrito`);
      break;
    case "lighthouse":
      console.log(`${pedalLighthouse.nombre} Agregado al carrito`);
      break;
    case "andromeda":
      console.log(`${pedalAndromeda.nombre} Agregado al carrito`);
      break;
    case "apocalipsis":
      console.log(`${pedalApocalipsis.nombre} Agregado al carrito`);
      break;
    case "fuzzilla":
      console.log(`${pedalFuzzilla.nombre} Agregado al carrito`);
      break;
    default:
      break;
  }
}; //---> SOLO CUMPLE LA FUNCION DE MOSTRAR UN MENSAJE QUE DICE QUE FUE AGREGADO "X" PEDAL AL CARRITO

const pedalNautilus = new Pedal("Nautilus", "delay-chorus", 18000);
const pedalLighthouse = new Pedal("Lighthouse", "phaser analógico", 18000);
const pedalAndromeda = new Pedal("Andromeda", "reverb digital", 20000);
const pedalApocalipsis = new Pedal("Apocalipsis", "overdrive", 20000);
const pedalFuzzilla = new Pedal("Fuzzilla", "overdrive", 18500);

const pedales = [
  pedalNautilus,
  pedalLighthouse,
  pedalAndromeda,
  pedalApocalipsis,
  pedalFuzzilla,
]; //--->SIRVE PARA PODER RECORRER LOS OBJETOS Y FILTRAR POR ALGUNAS DE SUS PROPIEDADES

const agregarPedal = () => {
  const pedalElegido = prompt(`Elija su pedal:
                            🐙${pedalNautilus.nombre}
                            🌊${pedalLighthouse.nombre}
                            🚀${pedalAndromeda.nombre}
                            🧟‍♂️${pedalApocalipsis.nombre}
                            🦖${pedalFuzzilla.nombre}`);
  if (pedalElegido != null) { //DE NO ELEGIR NINGUNA OPCIÓN VAMOS DIRECTAMENTE AL ELSE
    mensaje(pedalElegido);
   //SE MUESTRA EL MENSAJE ANTERIORMENTE AGREGADO Y CON EL SWITCH VAMOS AGREGANDO LOS PEDALES AL ARRAY DEL CARRITO
    switch (pedalElegido) {
      case "nautilus":
        carrito.push(pedalNautilus);
        break;
      case "lighthouse":
        carrito.push(pedalLighthouse);
        break;
      case "andromeda":
        carrito.push(pedalAndromeda);
        break;
      case "apocalipsis":
        carrito.push(pedalApocalipsis);
        break;
      case "fuzzilla":
        carrito.push(pedalFuzzilla);
        break;
      default:
        alert("ASEGURESE DE HABER ESCRITO CORRECTAMENTE EL NOMBRE DEL PEDAL");
        break;
    }

    let continuar = confirm("¿DESEA AGREGAR OTRO PEDAL A SU COMPRA?");
    if (continuar) {
      agregarPedal(); //SI SE SIGUE AGREGANDO PEDALES A LA COMPRA VOLVEMOS A REPETIR EL "CICLO"
    } else {
      console.log(`Total a abonar $${totalCarrito()}`); // SI NO SE AGREGAN MAS PEDALES CALCULAMOS EL COSTO DE LA COMPRA
    }
  } else { //SI EL USUARIO NO ELIGE NINGUN PEDAL LE DAMOS LA POSIBILIDAD DE FILTRAR POR TIPO DE EFECTO
    let buscar =
      prompt(`SI NO SABES QUE PEDAL ELEGIR, PUEDES BUSCARLO POR TIPO DE EFECTO
        (PROBA CON "DELAY"-"PHASER"-"REVER"-"OVERDRIVE")`);
    if(buscar != null){
        const buscarEfecto = pedales.filter((pedal) => pedal.efecto.includes(buscar));

        if(buscarEfecto.length > 1){ //COMO SOLO TENEMOS DOS EFECTOS REPETIDOS, SI EL ARRAY TIENE MAS DE UN ELEMENTO MOSTRAMOS ESTE MENSAJE
            if(confirm(`TE PODRIA LLEGAR A INTERESAR NUESTRO ${(buscarEfecto[0].nombre).toUpperCase()} O NUESTRO ${(buscarEfecto[1].nombre).toUpperCase()} AGREGALO AL CARRITO`)){
                agregarPedal();
            }else{
                alert("GRACIAS POR SU VISITA");
            }
        }else{ //DE ELEGIR CUALQUIERA DE LOS OTROS EFECTOS QUE NO ESTAN REPETIDOS MOSTRAMOS LA POSIBILIDAD DE COMPRA
            if((confirm(`TE PODRIA LLEGAR A INTERESAR NUESTRO ${(buscarEfecto[0].nombre).toUpperCase()} AGREGALO AL CARRITO`))){
                agregarPedal();
            }else {
            alert("GRACIAS POR SU VISITA");
          }
        }    
      }else{
          alert("GRACIAS POR SU VISITA")
      }
    };
}

agregarPedal();
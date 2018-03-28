# AliensNet

Proyecto de ejemplo.

Basado en el enunciado:
Our team here at AXA is playing a fantasy role-playing game and every time the
heroes they play arrive at a town, they have the issue they don't know the local
population and what they can do to help them on their adventures.
This is one of these times, our heroes just arrived at a Gnome town called
Brastlewark. To facilitate trade with the local population they need an easy way to
browse all the inhabitants details. We've found a server providing all the census data
of Brastlewark at the following address:
https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json
Gnomes in this town are not really social because they have too much work to do.
That's the reason they can have more than one job and might have few or even no
friends at all. They also appreciate their privacy so they've used some random
images from internet, not specifically optimized for mobile devices, for their profile.
(They are very modern in some aspects and they have smartphones and access to
internet for instance). 

## ¿Cómo utilizo la aplicación? 

Ejecutar "npm install" y luego "ng serve" o "npm start" (se debe tener instalado el CLI de Angular(IO))
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Pasos para demostración de funcionalidad

Ejemplo 1: 

- Tipear "kin". 
- Hacer click en "Opciones de filtro"
- Seleccionar "Filtro por peso de 35 a 45 kg"
- Seleccionar "Filtro por alturas 125 a 130 cm"

Resultado esperado:
Se debería poder ver cómo se ejecuntan en forma dinámica los filtros sobre el listado que aparece a la medida que tipeamos.
Luego a medida que vamos refinando las opciones de filtro, cargadas dinámicamente en base a los datos obtenidos (maestro), la visual cambia para mostrar un detalle con foto y datos extra de nuestros "aliens"
En la vista de lista de nombres se puede hacer click entrando a un detalle del personaje seleccionado.

## TODO

- Mejor manejo de errores
- Test Unitarios
- Test e2e
- Mostrar información extra (de profesiones)

## Librerias utilizadas

- La única librería extra utilizada es Angular Material para mejora de los aspectos gráficos (totalmente evitable si se necesitara mejorar la performance de carga)




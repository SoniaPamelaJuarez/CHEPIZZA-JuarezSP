Este proyecto fue creado para la pizzería de un amigo que vive en Cancún, es un E-commerce creado con React js.

# Instalación: 

Tener descargados los programas Visual Studio Code (VSC) y Node.js 

# Clonar repositorio de GitHub

Ingresamos a VSC, abrimos una terminal bash y clonamos el repositorio: git clone https://github.com/SoniaPamelaJuarez/CHEPIZZA-JuarezSP.git

# Librerías utilizadas Node.js & npm

Create React App: para la creación de la app

React icons: para exportar iconos en linea

React router: para el manejo de las rutas en la app

# Hooks

UseState: para guardar estados en memoria

UseEffect: permite que la funcion se ejecuto despues de que se monte el componente

UseParams: para poder usar un parametro en la url, retorna un objeto

UseAsync: custom hook creado para optimización del código

# BackEnd

La base de datos de la apliación fue implementado con Firebase/Firestore. 

# Scripts disponibles 

npm start: corre la aplicación en modo desarrollador

Para abrir [http://localhost:3000](http://localhost:3000) para correr la aplicación en el navegador

Para cerrar presionamos Ctrl + c

# Creación de la aplicación

Para una mejora en el rendimiento y el entendimiento de la App, se creo una carpeta "componentes" en donde se fue organizando componente a componente cada archivo js y css correspondiente.

1. La barra de navegación se encuentra en la carpeta Navbar, ahi encontramos los archivos Navbar.js y Navbar.css. Este componente sirve para la navegación de la app.
2. CartWidget: es el carrito de Navbar, aquí se verá la totalidad de productos seleccionados.
3. ItemListContainer: guardamos los productos que obtenemos de FireStore en un estado (useState), utilizamos un useState para que se monte el componente antes. Es en donde se montan las cards de Item a través del mapeo realizado en ItemList
4. ItemDetailContainer: es en donde se monta el ItemDetail, tiene el mismo funcionamiento de ItemListContainer. 
5. ItemCount: es el contador de los productos que quiero agregar en el carrito. 
6. Button: Son los links que se encuentran en el NavBar. 

# GIF 

Puede ver una vista previa de la aplicación "React-App.gif"













Este proyecto fue creado para la pizzería de un amigo que vive en Cancún, es un E-commerce creado con React js. Por ahora es un simulador, en donde se logra ver una lista de productos adapatada en cards, en las cuales tenemos acceso a ver el detalle de los productos y poder seleccionar la cantidad que queramos y agregarlas al carrito. Luego en la vista del cart podemos ver la totalidad de productos seleccionados, podemos limpiar en totalidad el carrito o borrar algun producto en particular. Siguiendo con la linea, podemos acceder al checkout en donde nos da la posibilidad de llenar un formulario y generar una orden de compra. 

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

# Optimizacion de código

Refactorización firestore: abstraemos firestore de ItemListContainer e ItemDetailContainer.

Custom Hook: useAsync, utilizado en ItemListContainer e ItemDetailContainer.

# Creación de la aplicación

Para una mejora en el rendimiento y el entendimiento de la App, se creo una carpeta "componentes" en donde se fue organizando componente a componente cada archivo js y css correspondiente.

1. La barra de navegación se encuentra en la carpeta Navbar, ahi encontramos los archivos Navbar.js y Navbar.css. Este componente sirve para la navegación de la app:
Home: podemos ver todos los productos de la app.
Luego podemos filtrar por categorías: en este caso tenemos Pizzas, Hamburguesas o Ensaladas.
2. Button: Son los links que se encuentran en el NavBar. 
3. CartWidget: es el carrito de Navbar, aquí se verá la totalidad de productos seleccionados. Mientras vamos seleccionando los productos, se van sumando al carrito y va apareciendo el total de productos en el CartWidget. Si hacemos click en el icono tenemos acceso al carrito de compras
4. ItemListContainer: guardamos los productos que obtenemos de FireStore en un estado (useState), utilizamos un useEffect para que se monte el componente antes (Para optimización de código se creo un custom Hook en donde se encuentra el useEffect). Es en donde se montan las cards de Item a través del mapeo realizado en ItemList
5. ItemDetailContainer: es en donde se monta el ItemDetail. Aqui podemos ver el detalle del producto, tambien se monta el contador (ItemCount)
6. ItemCount: es el contador de los productos que voy agregando en el carrito. 
7. CartContainer: es en donde se monta el CartItem. Aqui tenemos la vista del carrito de compras de lo productos que seleccionamos. Tenemos la posibilidad de eliminar un producto o limpiar el carrito en su totalidad. Aqui tenemos el acceso al checkout una vez que tomamos la decision de comprar. 
8. Checkout: Accedemos al formulario de compra, cargamos el nombre, teléfono y e-mail, generamos la orden de compra (obteniendo un id de compra). También tenemos la posibilidad de volver al carrito de compras. 


# GIF 

Puede ver una vista previa de la aplicación "React-App.gif"













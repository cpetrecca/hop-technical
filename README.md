# HOP Ejercicio Tecnico

## Author
Cristian Petrecca

## El ejercicio
Realizar un  tablero Kanban de tres columnas: Sin realizar - En proceso - Realizado.
- Se deben poder crear tareas. Las tareas poseen solamente una descripción.
- Las tareas se deben poder mover entre las columnas (con drag and drop o un botón).
- No es necesaria la persistencia de dichas tareas.

## Planificacion a Realizacion
Boilerplate creado con create-react-app con typescript template. 
Vamos a utilizar Tailwind como utility-first CSS framework instalado como dev dep.
Vamos a utilizar un config para hacer dinamica la cantidad de columnas y que el flow sea escalable.
Algunos test unitarios porque nunca estan de mas pero seran mantenido al minimo ya que no son pedidos.
Implementaremos drag and drop ya que es la UX esperada para este tipo de apps.
Creacion de tareas por formulario, display en modal usando usePortal hook.
Para mantener el codigo mas limpio y modularizado vamos a manejar la logica de las tareas usando un custom hook.


## Correr la app bajando de repositorio git y correr en ambiente local
1-Clonar Repositorio
2- ejecutar npm install para instalar dependencias necesarias
3- ejecutar npm start para que corra en http://localhost:3000/


## Live URL

...

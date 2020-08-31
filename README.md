

# Test project


<h2>Características generales:</h2>
<ul>
    <li>
    Se encontró que para gran tipo de operaciones necesarias en este proyecto se resolvían fácilmente usando Binary Search Tree,
    esto permitió encontrár fácilmente, por ejemplo, la fecha/hora más cercana a la actual, fecha más temprana, más tardía, temperatura mínima, máxima, etc.
  </li>
  <li>
    En la mayoría de algoritmos y procesos de intentó mantener una complejidad O(n), salvo en problemas de recursividad como encontrar el nodo más cercano en BST.
  </li>
  <li>
    En la mayoría de algoritmos y procesos de intentó mantener una complejidad O(n), salvo en problemas de recursividad como encontrar el nodo más cercano en BST.
  </li>
  <li>
    Las pantallas cambian de color dependiendo el estado del clima para ese día según el API. Eso se logra usando temas con styled-components y se propaga la actualización con Redux.
  </li>
  <li>
    Se implementaron Hooks, HOCs y Clases dependiendo la necesidad. Por ejemplo en el contenedor BoundaryError era estrictictamente necesario capturar la excepción con las herramientas que ofrece una clase.
  <li>
  <li>
    Se usa local storage, tenía la idea de guardar allí todos los datos pero finalmente solo guardé el tema. Esto es por razones de tiempo: no pude dedicar tanto como quería.
  <li>
  <li>
    Hay una implementación para soporte multilenguaje, pero no he alcanzado a terminarla.
  <li>
  <li>
    .
  <li>
    Se usó Redux para una implementación tipo CQRS, donde una action es un comando que dispara una saga. 
    En la saga se realizan todas las operaciones con datos, fuera de la UI, y se guardan en un estado de Redux.
  </li>
  <li>
    Se usó styled-components y se mantuvieron componentes totalmente reusables.
  </li>
</ul>




## Project structure


```
src\

 |--Container\     # Contenedores. Se tratan de componentes que procesan datos y son una screen o parte importante de ella.
           |--\sections # Son componentes formados de componentes primitivos y que no son reusables sino que pertenecen a un contenedor.
 |--Components\    # Componentes totalmente reusables y extendibles.
 |--lib\   # Funciones y métodos que pueden ser usables pero cumplen una función pequeña y específica.
 |--locales\       # Implementación de Intl (no terminada)
 |--store\         # Configuración de la store y los inyectores de reducers y sagas.
 |--\utils\        # Utilería reusable.
 |--types\         # Conviven tipos globales. Allí por ejemplo se configura RootState, que ayuda a inyectar reducers por medio de sus keys.
 |--index.ts       # Punto de entrada donde se configuran providers y otros archivos.
```

### Instalación


Clone repository:

First Tab:
```sh
 git clone --depth https://github.com/devangelmotta/servi-senior-test.git <FRIENDLY_NAME>
```
Instale dependencias: 
```sh
 yarn
```

Dev mode :
```sh
 yarn start 
```

```
Nota: Lamento que haya quedado faltando tanto. Faltó el responsive, terminar los test, mejorar y explicar el sentido de la UI. Y muchas cosas más.
Da un poco de pena este proyecto a medias pero no puedo dedicar más tiempo.
Si sienten que este proyecto no es satisfactorio me gustaría poder presentar otra prueba luego. Es solo que esta ocurrió en un horrible momento.
```

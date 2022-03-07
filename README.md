# TPBackEnd

El programa se ejecuta en la carpeta con el siguiente comando:

npm run dev

Luego se busca en el navegador la URL: 

http://http://localhost:8080/crearPersonas Para mostrar los usuarios en la base de datos.

http://localhost:8080/crearPersonas Para ingresar una nueva persona.

Se agrego el archivo word donde contiene el ejercicio 3 con las imagenes pedidas.

Ejercicio 2

Las siguientes preguntas están orientadas a la comprensión del protocolo HTTP. Son agnósticas al lenguaje de programación, la idea es comprender los conceptos del estándar:
1.	¿Qué es un servidor HTTP? 
El servidor http se comprende de URLs (direcciones web) y HTTP (protocolo que el navegador usa para ver las páginas web).
En el nivel mas básico, cuando un navegador necesite de un archivo que se encuentra en el servidor web, el navegador hará una solicitud al servidor mediante la via HTTP. Cuando la petición llega al servidor web correcto, el servidor HTTP envía el archivo antes solicitado, también a través de HTTP.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Los verbos HTTP son aquellos que realizan un método de petición para indicar la acción que se desea realizar para un recurso determinado. Los mas conocidos son: POST, GET, PUT, PATCH y DELETE 

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
La petición o HTTP request es el mensaje que se envía desde el cliente al servidor para solicitar un resource.
La respuesta o HTTP response es el mensaje que envía el servidor al cliente tras haber recibido una petición o HTTP request
Las Cabeceras HTTP son los parámetros que se envían en una petición o respuesta HTTP al cliente o al servidor para proporcionar información esencial sobre la transacción en curso.

4.	¿Qué es un queryString? (En el contexto de una url)
Es una cadena de consulta donde se envia en la url información.
Ejemplo: http:/localhost:3000/personas?size=10. En esta url podes ver que se envia como dato el size = 10. Que podría ser la cantidad de personas que se desea mostrar por pagina.

5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Son códigos de estados de respuesta. Indican si se ha completado satisfactoriamente una solicitud HTTP. Los estados pueden agruparse:
Respuestas informativas (100-199),
Respuestas satisfactorias (200-299),
Redirecciones (300-399),
Errores de clientes (400-499) y
Errores de servidores (500-599)

6.	¿Cómo se envía data en un Get y cómo en un POST? 
La data en un GET  se envia desde el servidor al cliente que realiza una petición. Se puede enviar datos mediante la queryString (URL).
La data en un POST se realiza desde el cliente al servidor. Donde se obtiene mediante una redireccion.

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Cuando accedemos a una pagina se esta realizando un GET ya que estamos haciendo una petición para ver dicha pagina

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
9.  Explicar brevemente el estándar SOAP
11.	Explicar brevemente el estándar REST Full
12.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?

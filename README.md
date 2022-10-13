"# Talenta-test" 
1. formulario en react
2. debe tener un campo de texto
3. debe tener un botón de enviar
4. cuando doy click en enviar el formulario envía el texto a un backend
en nodejs con express (hay que construir ese backend)
5. cuando el backend recibe el texto lo guarda en un array 
dentro del backend
6. cada vez que desde el frontend enviamos un texto, el frontend 
va a pedirle al backend que le mande el array de todos los textos 
y una vez recibido ese array pinta la lista de textos debajo del formulario

En resumen: 
  - el frontend tiene el formulario y la lista de los textos enviados
  - el backend debe tener una manera de recibir cada texto
  guardarlo en el array y devolver la lista de todos los textos

Aclaraciones:
- usar typescript
- no hay necesidad de usar css, pero es un plus
- no necesitas base de datos para guardar los textos, usar el array
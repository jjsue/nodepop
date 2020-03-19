# Nodepop
Proyecto full stack web development Keepcoding.
## ¿Como arrancar la base de datos?
Simplemente hay que ejecutar el archivo dbinit.js.
```
node dbinit.js
```

---


## Llamadas a la API:

Para obtener datos de la base de datos de nodepop es tan sencillo como usar query params en el endpoint /anuncios. Ejemplo:

```
url/anuncios?name=rueda
```

Tambien podemos encadenar todos los tags posibles mediante el símbolo "&". Ejemplo:
```
url/anuncios?name=rueda&sell=true
```

Los posibles filtros que tenemos son:
* name: Para buscar por el nombre del articulo
* tag: Para buscar por tag, deben estar jutnos y separados por comas. Pe: lifestyle,work
* sell: True para anuncios de venta, false para anuncios de compra.
* pricemax: Precio maximo
* pricemin: Precio minimo
* orderby: Elige como quieres recibir el orden de los resultos.
    * name: Ordena por nombre
    * price: Ordena por precio

El orden de uso de los filtros o el mismo uso de estos es totalmente opcional, si no usas algunos se omitirán y si no usas ninguno se te devolverán todos los resultados de la base de datos.

Hay dos filtros adicionales de paginación:

* skip: para saltarse x numero de resultados.
* limit: limitar resultados. Por defecto es 100
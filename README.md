# OpenJira Next APP

Para iniciar la aplicación se requiere disponer de docker y docker-compose. En la raíz de este proyecto podemos encontrar el fichero **docker-compose.yml**. En este fichero encontramos la configuración del servicio de mongodb.

## Iniciar el servicio de almacenamiento

Para iniciar el servicio de mongodb, ejecutaremos la siguiente sentencia:
`docker-compose up -d`

## Variables de entorno

Seguidamente deberemos copiar el fichero `.env.example` y lo renombraremos como `.env`. Dentro de este fichero podremos encontrar las variables requeridas para iniciar el proyecto.

La variable MONGODB_PATH deberá tener un formato similar al siguiente:
`mongodb://localhost:27017/test`

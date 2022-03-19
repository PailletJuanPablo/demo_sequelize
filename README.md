# Sequelize

1.  Instalar sequelize y mysql2
2.  Crear archivo .sequelizerc
    Referencia: https://sequelize.org/v4/manual/tutorial/migrations.html#the-sequelizerc-file

                 const path = require('path');

                 module.exports = {
                    'config': path.resolve('config', 'database.json'),
                    'models-path': path.resolve('db', 'models'),
                    'seeders-path': path.resolve('db', 'seeders'),
                    'migrations-path': path.resolve('db', 'migrations')
                 }

3.  Ejecutar
    npx sequelize-cli init

4.  Especificar como conectarse a la DB en config/database.js

5.  Crear los modelos (Mapear clases de sequelize con tablas)

Crear un modelo:
Especificarle a Sequelize

- Nombre de la tabla
- Columnas de la tabla con su tipo de dato
- Cualquier configuración adicional

- albumes
- id: INTEGER PRIMARY KEY, titulo: VARCHAR
- Tiene timestamps? cuando se creo, cuando se actualizó: NO

  a) Crear archivo Modelo.js
  b) Especificar Alias, Columnas y Configuración
  c) Exportar resultado de sequelize.define()

6. Importar el modelo y acceder a sus métodos desde donde quiera

## Crear un modelo

1- Creación del archivo (Primer letra mayuscula en singular)

            module.exports = (sequelize, DataTypes) => {
                // return Modelo
            }

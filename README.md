# Instalando dependencias 
    npm install

# Ejecutar la app con cualquiera de los siguientes comandos: 
    1.  npm start 
    2.  ng serve --proxy-config src/proxy.conf.json 
# Se está haciendo uso de un proxy porque Deezer API no me permite realizar solicitudes directamente (CORS error).

# ###############################
# FUNCIONALIDADES DESARROLLADAS
    1. En la ruta 'home/mis-albumes' se lista todos los albumes que sigue el usuario.
    2. Permite buscar o filtrar entre los albumes que sigue el usuario en la página de Deezer.
    3. Al dar clic en un album se listará las lista de canciones del albúm seleccionado.
    4. Permite filtrar o buscar entre todas las canciones del albúm anteriormente selecconado.
    5. Al dar clic en cualquier botón play de alguna música, esta se empezará a reproducir
    6. La barra de reproducción permite pausar la música y subir o bajar el volumen.
# ###############################

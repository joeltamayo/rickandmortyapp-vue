// Componente Home
export default {
    template: `
        <div class="row gx-5 gy-4">
            <!-- Columna 1: Imágenes -->
            <div class="col-12 col-xxl-6 col-xl-5 col-lg-12 d-flex align-items-center justify-content-center p-4">
                <div class="text-center">
                    <img src="media/ship.png" class="img-fluid rounded mb-3" alt="Ship">
                    <img src="media/Rick-And-Morty-title.png" class="img-fluid rounded" alt="Logo">
                </div>
            </div>

            <!-- Columna 2: Texto -->
            <div class="col-12 col-xxl-6 col-xl-7  col-lg-12  d-flex align-items-center justify-content-center p-4">
                <div class="p-5 border-white rounded-5 shadow-sm baner">
                    <h1>¡Bienvenido a la Dimensión Ω-42!</h1>
                    <p>
                        En este portal encontrarás al elenco completo de Rick &amp; Morty: desde los Ricks más excéntricos hasta
                        los
                        Mortys más despistados. Sube a bordo de tu nave interdimensional y prepárate para:
                    </p>

                    <ol>
                        <li>
                            Explorar la Galaxia de Personajes
                            <ul>
                                <li>Desplázate página a página para descubrir nuevos rostros (¡y algunos muy extraños!).</li>
                                <li>Usa “Siguiente” y “Anterior” para saltar entre universos sin romper el espacio-tiempo.</li>
                            </ul>
                        </li>
                        <li>
                            Cazar tu Criatura Favorita
                            <ul>
                                <li>
                                    Teclea un nombre o aplica filtros por estado (vivo/muerto/desconocido), especie (humanos,
                                    alienígenas) y género.
                                </li>
                                <li>
                                    Encuentra a ese Rick perdido o a esa Unity inigualable en un instante.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Sumérgete en Sus Historias
                            <ul>
                                <li>Haz clic en “Ver detalles” y descubre su origen, especie, ubicacion actual, genero, estado
                                    etc.
                                </li>
                                <li>Conoce curiosidades que ni siquiera un científico de la Federación Galáctica podría ignorar.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Tu Galería de Favoritos
                            <ul>
                                <li>Marca con un corazon a tus personajes más épicos.</li>
                                <li>Crea tu propia “colección de realidades” para regresar cuando quieras a esos momentos
                                    inolvidables.</li>
                            </ul>
                        </li>
                    </ol>

                    <h4>¡La aventura intergaláctica comienza ahora!</h4>
                    <p>
                        Pulsa “Ver Personajes” y lánzate a un viaje tan loco como un experimento de Rick. ¡El multiverso tiene
                        un asiento reservado para ti!
                    </p>

                    <!-- Botón que redirige a la vista de personajes -->
                    <router-link to="/personajes" class="ui btn btn-primary w-25">Personajes</router-link>
                </div>
            </div>
        </div>
    `
};
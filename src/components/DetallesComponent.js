export default {
    template: `
            <div class="container py-4">
                <button class="ui btn btn-outline-secondary mb-4" @click="$router.back()">← Volver</button>

                <div v-if="char" class="p-4 rounded-4 bg-light main-card position-relative">
                    <!-- Botón favorito -->
                    <span class="fav-icon" :class="{ 'fav-active': isFav, 'animate-beat': beat }" @click="toggleFav">
                        <i :class="isFav ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
                    </span>
                    <div class="row g-4">
                        <!-- Imagen -->
                        <div class="col-12 col-md-5 d-flex justify-content-center">
                            <div class="image-wrapper">
                                <img :src="char.image" alt="Imagen del personaje" class="img-fluid">
                            </div>
                        </div>

                        <!-- Información -->
                        <div class="col-12 col-md-7">
                            <h2 class="ui-text mb-4 fw-bold text-center text-md-start">{{ char.name }}</h2>
                            <div class="row gy-3">
                                <div class="col-12 col-lg-4 col-md-6 col-sm-6" v-for="(value, label) in info" :key="label">
                                    <div class="info-box p-3 rounded-3 bg-white shadow-sm h-100 border">
                                        <small class="text-muted">{{ label }}</small>
                                        <div class="fw-semibold fs-6">{{ value }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cargando… -->
                <div v-else class="text-center mt-5">
                    <div class="spinner-border text-primary" role="status"></div>
                    <p class="mt-3">Cargando personaje...</p>
                </div>
            </div>
    `,
    data() {
        return {
            char: null, // Objeto del personaje actual que se mostrará
            favs: JSON.parse(localStorage.getItem('favs') || '[]'), // Lista de favoritos guardada en localStorage
            beat: false // Controla animación (como efecto de latido) al dar fav
        };
    },
    computed: {
        // Retorna true si el personaje actual está en la lista de favoritos
        isFav() {
            return this.favs.some(f => f.id === this.char?.id);
        },

        // Devuelve un objeto con información estructurada del personaje
        info() {
            if (!this.char) return {}; // Evita errores si char aún no está cargado
            return {
                "Estado": this.char.status,
                "Especie": this.char.species,
                "Tipo": this.char.type || 'N/A', // Si no tiene tipo, se muestra 'N/A'
                "Género": this.char.gender,
                "Origen": this.char.origin.name,
                "Ubicación actual": this.char.location.name,
            };
        }
    },
    methods: {
        // Agrega o quita al personaje actual de la lista de favoritos
        toggleFav() {
            if (!this.char) return; // Evita errores si char aún no está disponible

            const index = this.favs.findIndex(f => f.id === this.char.id);
            if (index >= 0) {
                // Ya está en favoritos → se elimina
                this.favs.splice(index, 1);
            } else {
                // No está en favoritos → se agrega
                this.favs.push(this.char);
            }

            // Se actualiza el localStorage con la nueva lista
            localStorage.setItem('favs', JSON.stringify(this.favs));

            // Se activa una animación visual
            this.beat = true;
            setTimeout(() => (this.beat = false), 400); // Dura 400ms
        }
    },
    async mounted() {
        // Al montar el componente, se obtiene el ID desde la URL
        const id = this.$route.params.id;

        // Se consulta la API de Rick & Morty para obtener los datos del personaje
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        this.char = data;

        // Se asegura que la lista de favoritos esté actualizada (por si cambió)
        this.favs = JSON.parse(localStorage.getItem('favs') || '[]');
    }
}
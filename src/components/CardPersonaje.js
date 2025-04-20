export default {
  name: 'CardPersonaje',
  props: ['character'],
  template: `
            <div class="col-6 col-md-3 mb-4">
                <div class="card character-card h-100 position-relative">

                    <!-- Ícono favorito -->
                    <span class="fav-icon" :class="{ 'fav-active': isFav, 'animate-beat': beat }" @click.stop="toggleFav">
                        <i :class="isFav ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
                    </span>

                    <!-- Link a detalles de personajes -->
                    <router-link :to="'/personaje/' + character.id" class="text-decoration-none text-dark d-block h-100">

                        <!-- Imagen -->
                        <div class="image-container">
                            <img :src="character.image" class="card-img-top" alt="" />
                        </div>

                        <!-- Informacion -->
                        <div class="card-body text-center">
                            <h6 class="card-title">{{ character.name }}</h6>
                            <p class="small text-muted">{{ character.species }} – {{ character.status }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
    `,
  data() {
    return {
      // Indica si el personaje actual es un favorito (true/false)
      isFav: false,

      // Controla la animación de "latido" al marcar/desmarcar como favorito
      beat: false
    }
  },
  mounted() {
    // Al montar el componente, se revisa si el personaje está en favoritos
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');

    // Comprobamos si el personaje actual ya está guardado como favorito
    this.isFav = favs.some(f => f.id === this.character.id);
  },
  methods: {
    // Alterna el estado de favorito del personaje
    toggleFav() {
      // Se obtienen los favoritos actuales del localStorage
      let favs = JSON.parse(localStorage.getItem('favs') || '[]');

      // Verificamos si el personaje ya está en favoritos
      const index = favs.findIndex(f => f.id === this.character.id);

      if (index >= 0) {
        // Si ya es favorito → lo quitamos
        favs.splice(index, 1);
        this.isFav = false;
      } else {
        // Si no es favorito → lo agregamos
        favs.push(this.character);
        this.isFav = true;
      }

      // Guardamos los cambios en el localStorage
      localStorage.setItem('favs', JSON.stringify(favs));

      // Activamos animación "beat" temporal (puede aplicarse a un icono ♥ por ejemplo)
      this.beat = true;
      setTimeout(() => (this.beat = false), 400);

      // Emitimos el evento para notificar al componente padre del cambio
      this.$emit('toggle-fav', this.character);
    }
  }
}
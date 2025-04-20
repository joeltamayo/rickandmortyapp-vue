import CardPersonaje from './CardPersonaje.js';

export default {
  components: {
    'character-card': CardPersonaje
  },
  template: `
            <div class="container py-4">
                <h2 class="mb-4">Mis Favoritos</h2>
                <transition-group name="fade" tag="div" class="row">
                    <character-card v-for="f in favs" :key="f.id" :character="f" @toggle-fav="removeFav" />
                </transition-group>
            </div>
  `,
  data() {
    return {
      favs: JSON.parse(localStorage.getItem('favs') || '[]')
    }
  },
  methods: {
    removeFav(char) {
      // Eliminamos el favorito
      this.favs = this.favs.filter(f => f.id !== char.id)
      localStorage.setItem('favs', JSON.stringify(this.favs))
    }
  }
}
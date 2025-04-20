import CardPersonaje from './CardPersonaje.js';

export default {
  components: {
    'character-card': CardPersonaje
  },
  template: `
            <div class="container py-4">
                <h2 class="mb-4">Personajes</h2>

                <!-- filtros -->
                <div class="row mb-3">
                    <div class="col-sm-4">
                        <input class="form-control" v-model="filters.name" placeholder="Buscar por nombre" />
                    </div>
                    <div class="col-sm-2">
                        <select class="form-select" v-model="filters.status">
                            <option value="">Estado</option>
                            <option value="alive">Vivo</option>
                            <option value="dead">Muerto</option>
                            <option value="unknown">Desconocido</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <select class="form-select" v-model="filters.species">
                            <option value="">Especie</option>
                            <option value="human">Humano</option>
                            <option value="alien">Alien</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <select class="form-select" v-model="filters.gender">
                            <option value="">Género</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <button class="ui btn btn-primary w-100" @click="fetchCharacters()">Aplicar</button>
                    </div>
                </div>

                <!-- lista de cards -->
                <div class="row">
                    <character-card v-for="char in characters" :key="char.id" :character="char" @toggle-fav="toggleFavorite" />
                </div>

                <!-- paginación -->
                <nav class="mt-4">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: page === 1 }">
                            <button class="page-link" @click="page--, fetchCharacters()">Anterior</button>
                        </li>
                        <li class="page-item disabled">
                            <span class="page-link">{{ page }} / {{ totalPages }}</span>
                        </li>
                        <li class="page-item" :class="{ disabled: !info.next }">
                            <button class="page-link" @click="page++, fetchCharacters()">Siguiente</button>
                        </li>
                    </ul>
                </nav>
            </div>
  `,
  data() {
    return {
      // Lista de personajes marcados como favoritos, cargada desde localStorage
      favs: JSON.parse(localStorage.getItem('favs') || '[]'),

      // Lista de personajes que se mostrarán en la vista
      characters: [],

      // Información de paginación devuelta por la API (ej. total de páginas, siguiente, anterior)
      info: {},

      // Página actual que se está consultando
      page: 1,

      // Filtros para buscar personajes por nombre, estado, especie o género
      filters: {
        name: '',
        status: '',
        species: '',
        gender: ''
      }
    };
  },
  computed: {
    // Devuelve el total de páginas disponibles según la respuesta de la API
    totalPages() {
      return this.info.pages || 1;
    }
  },
  methods: {
    // Obtiene personajes desde la API con filtros y paginación
    async fetchCharacters() {
      // Construimos la query string con los filtros y la página actual
      const qs = new URLSearchParams({
        page: this.page,
        ...this.filters
      }).toString();

      // Petición a la API de Rick and Morty
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character?${qs}`);

      // Guardamos los personajes y la info de paginación
      this.characters = data.results;
      this.info = data.info;
    },

    // Agrega o quita un personaje de la lista de favoritos
    toggleFavorite(char) {
      const index = this.favs.findIndex(f => f.id === char.id);

      if (index >= 0) {
        // Si ya es favorito → lo quitamos
        this.favs.splice(index, 1);
      } else {
        // Si no es favorito → lo agregamos
        this.favs.push(char);
      }

      // Actualizamos la lista de favoritos en localStorage
      localStorage.setItem('favs', JSON.stringify(this.favs));
    }
  },
  mounted() {
    // Al montar el componente, se cargan los personajes desde la API
    this.fetchCharacters();

    // Y se asegura que los favoritos estén actualizados desde localStorage
    this.favs = JSON.parse(localStorage.getItem('favs') || '[]');
  }

};
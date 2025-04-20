const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Importamos los componentes
import HeaderComponent from './src/components/HeaderComponent.js';
import Home from './src/components/HomeComponent.js';
import FooterComponent from './src/components/FooterComponent.js';
import ListaPersonajes from './src/components/PersonajesComponent.js';
import Detalles from './src/components//DetallesComponent.js';
import Favoritos from './src/components/FavoritosComponent.js';

// Definir rutas
const routes = [
  { path: '/', component: Home },
  { path: '/personajes', component: ListaPersonajes },
  { path: '/personaje/:id', component: Detalles },
  { path: '/favoritos', component: Favoritos }
];

// Crear router
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Crear la app
const app = createApp({
  components: {
    HeaderComponent,
    FooterComponent
  }
});

app.use(router);
app.mount('#app');
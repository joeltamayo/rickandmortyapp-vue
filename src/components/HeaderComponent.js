export default {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-custom">
                <div class="container-fluid">
                    <router-link to="/" class="navbar-brand w-25">                        
                        <img class="logo" src="media/Rick-And-Morty-title.png" alt="Rick and Morty">
                    </router-link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/personajes" class="nav-link">Personajes</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/favoritos" class="nav-link">Favoritos</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `
};

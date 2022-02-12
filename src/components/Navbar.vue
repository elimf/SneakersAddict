<template>
  

    <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="nav">
       <a class="navbar-brand" >Sneakers Addict</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/apropos">A Propos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/store">Store</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#rownav {
    display: flex;
    justify-content: space-between;
}
#nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: black;
}

#nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-size: 30px;
}

#nav a.router-link-exact-active {
    color: rgb(233, 20, 20);
    text-decoration: none;
    margin-right: 40px;
    font-size: 30px;
}
</style>

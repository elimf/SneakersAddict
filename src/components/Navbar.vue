<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <a class="navbar-brand">Sneakers Addict</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="router-link-exact-active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/apropos" class="nav-link" active-class="router-link-exact-active">A Propos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/store" class="nav-link" active-class="router-link-exact-active">Store</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10001;
  }
  
  #nav .navbar-brand {
    font-weight: bold;
    color: white;
    font-size: 30px;
  }
  
  #nav .nav-link {
    color: white;
    font-size: 18px;
  }
  
  #nav .nav-link.router-link-exact-active {
    color: rgb(233, 20, 20);
    font-weight: bold;
  }
  </style>
  
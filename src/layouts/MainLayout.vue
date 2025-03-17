<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-black">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">
            <q-avatar>
              <img src="../assets/logo.png" />
            </q-avatar>
          </router-link>
        </q-toolbar-title>

        <q-space />

        <q-space />
        <!-- Push items to the right -->

        <!-- SHOW NAV BUTTONS IF SCREEN IS WIDE -->
        <div v-if="$q.screen.width > 500" class="q-gutter-sm">
          <q-btn flat label="Portfolio" to="/portfolio" />
          <q-btn flat label="Techfolio" to="/techfolio" />
          <q-btn flat label="Services" to="/services" />
          <q-btn flat label="CV" href="/cv.pdf" target="_blank" />
          <q-btn flat label="Contact" to="/contactme" />
        </div>
        <!-- SHOW DRAWER IF SCREEN IS NARROW -->
        <q-btn v-else flat icon="menu" @click="drawerToggle" />

        <q-drawer v-model="drawer" side="right" overlay>
          <q-list>
            <q-item clickable v-ripple to="/portfolio" @click="toggleDrawer">Portfolio</q-item>
            <q-item clickable v-ripple to="/techfolio" @click="toggleDrawer">Techfolio</q-item>
            <q-item clickable v-ripple to="/services" @click="toggleDrawer">Services</q-item>
            <q-item clickable v-ripple href="/cv.pdf" target="_blank" @click="toggleDrawer">
              CV
            </q-item>
            <q-item clickable v-ripple to="/contactme" @click="toggleDrawer">Contact</q-item>
          </q-list>
        </q-drawer>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal bordered class="bg-primary text-black" style="padding: 10px 20px">
      <div class="row justify-between align-center items-center full-width" style="width: 100%">
        <!-- Left-Aligned: Personalized Signature -->
        <div class="col-auto text-left" style="font-family: monospace">
          <p class="text-xs">Designed and coded by Maya Shah</p>
        </div>

        <!-- Center-Aligned: Copyright -->
        <div class="col-auto text-center" style="font-family: monospace">
          <p class="text-xs">&copy; {{ new Date().getFullYear() }} - Maya Shah</p>
        </div>

        <!-- Right-Aligned: Current Time & Date -->
        <div class="col-auto text-right" style="font-family: monospace">
          <p class="text-xs" style="display: flex; justify-content: flex-end">
            {{ new Date().toLocaleDateString() }} | {{ new Date().toLocaleTimeString() }}
          </p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
// import SocialLinks from '../components/SocialLinks.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const drawer = ref(false)

console.log($q.screen.width)

const drawerToggle = () => {
  drawer.value = !drawer.value
}

// Update live clock every second
setInterval(() => {
  document.getElementById('live-clock').textContent = new Date().toLocaleTimeString()
}, 1000)
</script>

<style scoped>
#live-clock {
  padding: 0%;
  margin: 0%;
}
</style>

<template>
  <section class="contact-section">
    <h2 class="contact-heading">Let’s Connect!</h2>
    <p class="contact-text"></p>
    <p class="contact-details">
      If you have a question, want to collaborate, or simply want to say hi, feel free to reach out.
    </p>

    <!-- Social Icons in the Center -->
    <div class="row justify-center items-center">
      <SocialLinks />
    </div>
  </section>
</template>

<script setup>
import SocialLinks from '../components/SocialLinks.vue'
</script>

<style scoped>
/* Global style for entire page background */
body {
  background-color: #ff69b4; /* Pink background for the entire page */
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh; /* Ensure the background covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* General Section Styling */
.contact-section {
  text-align: center;
  padding: 40px;
  margin: 40px auto;
  background: transparent; /* Make section background transparent */
}

.contact-heading {
  font-size: 4rem;
  color: black;
}

/* Text Styling */
.contact-text,
.contact-details {
  font-size: 1.2rem;
  font-family: monospace;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 30px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>

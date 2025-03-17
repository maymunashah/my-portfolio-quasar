<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Left Side: Text + Social Links -->
      <div class="contact-text">
        <h1 class="contact-heading">Let’s Connect!</h1>
        <p class="contact-details">
          If you have a question, want to collaborate, or simply want to say hi, feel free to reach
          out.
        </p>
        <div class="social-icons">
          <SocialLinks />
        </div>
      </div>

      <!-- Right Side: Calendly Embed -->
      <div class="calendly-container">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/memoonashah78/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff69b4"
          style="min-width: 500px; height: 500px"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import SocialLinks from '../components/SocialLinks.vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
/* General Section Styling */
.contact-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: transparent;
}

/* Two-Column Layout */
.contact-container {
  display: flex;
  max-width: 900px;
  width: 100%;
  gap: 40px;
}

/* Left Side Styling */
.contact-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.contact-heading {
  font-size: 2rem;
  color: black;
}

.contact-details {
  font-size: 1rem;
  font-family: monospace;
  color: #000000;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* Social Icons */
.social-icons {
  margin-top: 20px;
  justify-content: center;
}

/* Right Side: Calendly Embed */
.calendly-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .contact-text {
    text-align: center;
    font-size: 0.9rem; /* Reduce text size */
  }

  .calendly-container {
    width: 100%; /* Make Calendly take full width */
  }

  .calendly-inline-widget {
    min-width: 100%;
    height: 400px; /* Reduce height */
  }
  .social-icons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>

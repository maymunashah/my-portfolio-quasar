<template>
  <!-- Social Icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="social-buttons">
    <a :href="resumeData.contact.linkedin" target="_blank" rel="noopener noreferrer">
      <button :style="{ color: iconColor }">
        <i class="fa fa-linkedin"></i>
      </button>
    </a>

    <!-- GitHub Button -->
    <a :href="resumeData.contact.github" target="_blank" rel="noopener noreferrer">
      <button :style="{ color: iconColor }">
        <i class="fa fa-github"></i>
      </button>
    </a>

    <!-- WhatsApp Button -->
    <a :href="resumeData.contact.whatsapp" target="_blank" rel="noopener noreferrer">
      <button :style="{ color: iconColor }">
        <i class="fa fa-whatsapp"></i>
      </button>
    </a>

    <!-- Email Button (mailto) -->
    <a :href="'mailto:' + resumeData.contact.email" target="_blank" rel="noopener noreferrer">
      <button :style="{ color: iconColor }">
        <i class="fa fa-envelope"></i>
      </button>
    </a>
  </div>
</template>

<script setup>
import resumeData from '../assets/resume.json'

// Define the color prop (defaults to black)
const props = defineProps({
  color: {
    type: String,
    default: 'black', // Default color is black
  },
})

const iconColor = props.color
</script>

<style scoped>
.social-buttons {
  display: flex;
  gap: 10px;
}

button {
  background: transparent;
  border: none;
  font-size: 20px;
  padding: 10px;
}

button:hover i {
  background-color: transparent;
  border: none;
  transform: scale(1.9); /* Slightly increases size without affecting the layout */
  transition: color 0.3s ease; /* Smooth color transition */
}

button i {
  font-size: 20px;
  transition: color 0.3s ease;
}
</style>

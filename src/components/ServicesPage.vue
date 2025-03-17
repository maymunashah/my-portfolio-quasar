<template>
  <div class="fit row wrap justify-evenly items-center content-between myservices-container">
    <div v-for="(service, index) in services" :key="index">
      <q-card dark bordered class="bg-secondary my-card">
        <q-card-section>
          <div class="text-h6">{{ service.name }}</div>
          <q-icon :name="service.icon" size="40px" color="primary" />
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p>{{ service.description }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  name: 'ServicesPage',
  setup() {
    const $q = useQuasar()
    const isSmallScreen = $q.screen.lt.md // Detect small screens

    return { isSmallScreen }
  },
  data() {
    return {
      services: [
        {
          name: 'AI Alchemist (Custom AI Agents & Chatbots)',
          icon: 'supervised_user_circle',
          description:
            'Transform raw data into gold—intelligent, human-like AI agents that interact, assist, and automate with precision.',
        },
        {
          name: 'Vision Architect (Computer Vision & Image Analysis)',
          icon: 'photo_camera',
          description:
            'Teaching machines to see what we see—and beyond. From facial recognition to automated inspection, I build AI that understands images and videos.',
        },
        {
          name: 'Data Whisperer (ML Model Training & Optimization)',
          icon: 'analytics',
          description:
            'Data speaks—I make AI listen. From training deep learning models to fine-tuning for performance, I optimize AI for real-world challenges.',
        },
        {
          name: 'AI Navigator (Consulting & Strategy)',
          icon: 'lightbulb',
          description:
            'Charting the best course for your AI journey—whether you’re building, scaling, or integrating AI, I help navigate the complex landscape.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.my-card {
  width: 250px;
  height: 350px;
  margin: 15px;
  font-size: small;
}

.myservices-container .my-card {
  padding: 10px;
}

p {
  font-family: sans-serif;
  font-size: small;
}

.text-h6 {
  font-weight: bold;
  margin-bottom: 10px;
}

.bg-secondary {
  background-color: #2c3e50;
}

.q-card-section {
  padding: 10px;
}

.q-icon {
  margin-top: 5px;
}
</style>

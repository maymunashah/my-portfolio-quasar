<template>
  <div class="fit row wrap justify-between items-center content-between myskills-container q-mt-xl">
    <q-card
      class="bg-accent my-card shadow-3 q-pa-md"
      v-for="(review, index) in testimonials"
      :key="index"
    >
      <q-card-section>
        <div class="review text-center q-mb-sm">"{{ review.text }}"</div>
        <q-separator dark />
        <div class="author text-center q-mt-sm">- {{ review.author }}</div>
      </q-card-section>
    </q-card>
    <q-space />
  </div>
</template>

<script>
export default {
  name: 'TestimonialCarousel',
  data() {
    return {
      testimonials: [
        {
          text: 'Passionate about building intelligent systems that make life easier.',
          author: 'AI Engineer',
        },
        {
          text: 'Transforming data into meaningful insights with advanced algorithms.',
          author: 'AI Engineer',
        },
        {
          text: 'Dedicated to pushing the boundaries of AI technology for the future.',
          author: 'AI Engineer',
        },
      ],
    }
  },
}
</script>

<style scoped>
.review {
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  font-size: 1.1rem;
  color: #333;
}

.author {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color: #555;
  font-weight: bold;
}

.my-card {
  width: 220px;
  min-height: 220px;
  border-radius: 15px;
  background-color: #f9f9f9;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.my-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.myskills-container {
  justify-content: space-around;
}
</style>

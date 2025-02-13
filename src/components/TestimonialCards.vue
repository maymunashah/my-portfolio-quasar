<template>
  <div class="fit row wrap justify-evenly items-center content-between testimonials-container">
    <div v-for="(review, index) in reviews" :key="index">
      <q-card
        dark
        bordered
        class="bg-black testimonial-card"
        clickable
        @click="goToPage(review.route)"
      >
        <q-card-section>
          <div class="text-h8 text-white">{{ review.name }}</div>
          <!-- <q-icon :name="review.icon" size="30px" color="black" /> -->
        </q-card-section>

        <q-separator dark inset white />

        <q-card-section>
          <p>"{{ review.testimonial }}"</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'TestimonialsGrid',
  setup() {
    const router = useRouter()

    function goToPage(route) {
      router.push(route) // Navigate to the corresponding page
    }

    return { goToPage }
  },
  data() {
    return {
      reviews: [
        {
          name: 'Alireza Dehghan',
          icon: 'person',
          testimonial:
            'I had the absolute pleasure of working alongside Maya during our time on Loop AI Labs. Not only was she my project manager, but she was also an exceptional mentor and an incredibly skilled coder. She is a leader, a natural problem solver, and a very good critical thinker. I learnt so much from her, and any team would be fortunate to have her.',
          route: '/alireza-review',
        },
        {
          name: 'Shaista Naz',
          icon: 'person',
          testimonial:
            "Maya's creativity and dedication to every project we worked on together was nothing short of inspiring. She always goes above and beyond, and her passion for technology is contagious. She is a problem-solver who approaches challenges with a calm and analytical mindset.",
          route: '/shaista-review',
        },
        {
          name: 'Ali Abbas Syed',
          icon: 'person',
          testimonial:
            'Memoona Shah was a student of mine during her undergraduate studies in Electronic Engineering. Having taught her multiple courses and mentoring her on several projects including her final year presentation as well, I can confidently say that she has been one of my best students. Memoona demonstrated determination, hard work and a .... (full recommendation is on linked in. duh)',
        },
        // {
        //   name: 'John Smith',
        //   icon: 'person',
        //   testimonial:
        //     'Working with Maya was a great experience. Her technical expertise and leadership skills set her apart from others. She is proactive, efficient, and always willing to lend a helping hand. Any team would benefit from her contributions, both professionally and personally.',
        //   route: '/john-review',
        // },
      ],
    }
  },
}
</script>

<style scoped>
.testimonial-card {
  width: 250px;
  height: 350px;
  margin: 10px;
  font-size: small;
  cursor: pointer;
}

.testimonial-card:hover {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
}

.testimonials-container .testimonial-card {
  padding: 15px;
}

p {
  font-family: monospace;
  font-size: x-small;
  color: white;
  text-align: center;
  padding: 10px;
  line-height: 1.5;
}
</style>

<template>
  <div class="fit row wrap justify-evenly items-center content-between myskills-container">
    <div v-for="(activity, index) in activities" :key="index">
      <q-card dark bordered class="bg-accent my-card" clickable @click="goToPage(activity.route)">
        <q-card-section>
          <div class="text-h6 text-black">{{ activity.name }}</div>
          <q-icon :name="activity.icon" size="30px" color="black" />
        </q-card-section>

        <q-separator dark inset black />

        <q-card-section>
          <p>
            {{ activity.description }}
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'ActivitiesGrid',
  setup() {
    const router = useRouter()

    function goToPage(route) {
      router.push(route) // Navigate to the corresponding page
    }

    return { goToPage }
  },
  data() {
    return {
      activities: [
        {
          name: 'Graphic Design',
          icon: 'brush',
          description:
            'Creating visually appealing designs with a personal touch. I studied graohic design in a 6 months course back when i was studying electronics and since then i have been working as a graphic designer part time both paid as well as volenteering based gigs!',
          route: '/graphic-design',
        },
        {
          name: 'Lacrosse Goalie',
          icon: 'sports',
          description:
            'Blocking shots and holding the fort in fast-paced matches. Oh, you dont know whats lacrosse? well its an american sport and we decided to start a womens lacrosse team for reggio emilia. Ask your female friends to give it a try. we play every wednesday 8:00 pm in via cisalpina.',
          route: '/lacrosse',
        },
        {
          name: 'Crocheter',
          icon: 'handyman',
          description:
            'Crafting handmade pieces, stitch by stitch. Well, mostly spending too much money and time to make pieces that are cute but dont really fit me well. (laughs internally)',
          route: '/crochet',
        },
        {
          name: 'Art Club',
          icon: 'palette',
          description:
            'Bringing people together to paint and create. I run an art club in via cassoli with a simple goal to stay in touch with our creative side. Open to all people artists or art lovers. check us out @viacassoliouno instagram page.',
          route: '/art-club',
        },
        {
          name: 'Photography',
          icon: 'photo_camera',
          description:
            'Exploring photography and taking a formazione course to improve. well to be real, i just like taking pictures of people, clouds and flowers but then i thought, why not try to study it and learn to get better. I am working on it, lets see where it takes me!',
          route: '/photography',
        },
      ],
    }
  },
}
</script>

<style scoped>
.my-card {
  width: 200px;
  height: 300px;
  margin: 5px;
  font-size: small;
  cursor: pointer;
}

.my-card:hover {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
}

.myskills-container .my-card {
  padding: 5px;
}

p {
  font-family: monospace;
  font-size: x-small;
  color: black;
}
</style>

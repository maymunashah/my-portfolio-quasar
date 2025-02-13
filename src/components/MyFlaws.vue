<template>
  <div class="fit row wrap justify-evenly items-center content-between myskills-container">
    <div v-for="(flaw, index) in flaws" :key="index">
      <q-card dark bordered class="bg-secondary my-card" clickable @click="goToPage(flaw.route)">
        <q-card-section>
          <div class="text-h8">
            <q-icon :name="flaw.icon" size="20px" color="primary" />

            {{ flaw.name }}
          </div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p>
            {{ flaw.description }}
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'RedFlagsGrid',
  setup() {
    const router = useRouter()

    function goToPage(route) {
      router.push(route) // Navigate to the corresponding page (could be a joke page later!)
    }

    return { goToPage }
  },
  data() {
    return {
      flaws: [
        {
          name: 'Perfectionism & Self-Criticism',
          icon: 'error',
          description:
            'Because no one is perfect… except maybe my code, but even that’s still a work in progress.',
          route: '/perfectionism',
        },
        {
          name: 'Work-Life Balance Struggles',
          icon: 'schedule',
          description: "Who needs rest when there's always another project to work on, right?",
          route: '/work-life-balance',
        },
        {
          name: 'Overthinking & Worrying',
          icon: 'alarm',
          description: 'What if the wifi goes out during an interview? Just kidding… or am I?',
          route: '/overthinking',
        },
      ],
    }
  },
}
</script>

<style scoped>
.my-card {
  width: 300px;
  height: 150px;
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
  color: white;
}
</style>

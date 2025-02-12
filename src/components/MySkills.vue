<template>
  <div class="fit row wrap justify-evenly items-center content-between myskills-container">
    <div v-for="(skill, index) in skills" :key="index">
      <q-card dark bordered class="bg-secondary my-card">
        <q-card-section>
          <div class="text-h6">{{ skill.name }}</div>
          <q-icon :name="skill.icon" size="40px" color="primary" />
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p>
            {{ skill.description }}
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import skillsData from '../assets/skills.json'

export default {
  name: 'SkillsGrid',
  setup() {
    const $q = useQuasar()
    const isSmallScreen = $q.screen.lt.md // Detect small screens

    return { isSmallScreen }
  },
  data() {
    return {
      skills: skillsData.skills,
    }
  },
}
</script>

<style>
.my-card {
  width: 200px;
  height: 250px;
  margin: 5px;
  font-size: small;
}

.myskills-container .my-card {
  padding: 5px;
}

p {
  font-family: monospace;
  font-size: x-small;
}
</style>

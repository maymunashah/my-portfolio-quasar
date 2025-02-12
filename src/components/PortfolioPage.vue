<template>
  <div class="portfolio-container">
    <!-- Sidebar Navigation -->
    <nav class="sidebar">
      <ul>
        <li v-for="section in sections" :key="section.id">
          <button
            :class="{ active: currentSection === section.id }"
            @click="scrollToSection(section.id)"
          >
            {{ section.label }}
          </button>
        </li>
      </ul>
    </nav>

    <!-- Continuous Sections -->
    <div class="content">
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        :style="{ background: section.color }"
        class="section"
      >
        <div class="section-content" :style="{ color: getTextColor(section.color) }">
          <h1 v-if="section.id === 'about'" :style="{ color: getTextColor(section.color) }">
            {{ resumeData.name }}
          </h1>
          <h2 v-if="section.id === 'about'" class="title">
            {{ resumeData.title }}
          </h2>
          <p v-if="section.id === 'about'" :style="{ color: getTextColor(section.color) }">
            {{ resumeData.objective }}
          </p>

          <div v-if="section.id === 'skills'">
            <h2 :style="{ color: getTextColor(section.color) }">Skills</h2>
            <ul>
              <li
                v-for="skill in resumeData.skills"
                :key="skill"
                :style="{ color: getTextColor(section.color) }"
              >
                {{ skill }}
              </li>
            </ul>
          </div>

          <div v-if="section.id === 'experience'">
            <h2 :style="{ color: getTextColor(section.color) }">Work Experience</h2>
            <div v-for="job in resumeData.experience" :key="job.company" class="item">
              <h3 :style="{ color: getTextColor(section.color) }">
                {{ job.position }} - {{ job.company }}
              </h3>
              <p :style="{ color: getTextColor(section.color) }">{{ job.duration }}</p>
              <li
                v-for="(responsibility, index) in job.responsibilities"
                :key="index"
                :style="{ color: getTextColor(section.color) }"
              >
                {{ responsibility }}
              </li>
            </div>
          </div>

          <div v-if="section.id === 'projects'">
            <h2 :style="{ color: getTextColor(section.color) }">Projects</h2>
            <li
              v-for="project in resumeData.projects"
              :key="project.name"
              :style="{ color: getTextColor(section.color) }"
            >
              {{ project }}
            </li>
          </div>

          <div v-if="section.id === 'education'">
            <h2 :style="{ color: getTextColor(section.color) }">Education</h2>
            <div v-for="edu in resumeData.education" :key="edu.institution" class="item">
              <h3 :style="{ color: getTextColor(section.color) }">{{ edu.degree }}</h3>
              <p :style="{ color: getTextColor(section.color) }">{{ edu.institution }}</p>
              <p :style="{ color: getTextColor(section.color) }">{{ edu.year }}</p>
            </div>
          </div>

          <div justify-center v-if="section.id === 'contact'">
            <h2 :style="{ color: getTextColor(section.color) }">Contact</h2>
            <!-- Social Icons in the Center -->
            <div class="row justify-center items-center">
              <socials color="#ffffff" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import resumeData from '../assets/resume.json'
import socials from '../components/SocialLinks.vue'

const sections = ref([
  { id: 'about', label: 'About', color: '#FF69B4' },
  { id: 'skills', label: 'Skills', color: '#800080' },
  { id: 'experience', label: 'Experience', color: '#000000' },
  { id: 'projects', label: 'Projects', color: '#FFFFFF' },
  { id: 'education', label: 'Education', color: '#FF69B4' },
  { id: 'contact', label: 'Contact', color: '#800080' },
])

const currentSection = ref('about')

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
}

const updateActiveSection = () => {
  let scrollPosition = window.scrollY + window.innerHeight / 3
  sections.value.forEach((section) => {
    let element = document.getElementById(section.id)
    if (!element) return

    if (
      element.offsetTop <= scrollPosition &&
      element.offsetTop + element.offsetHeight > scrollPosition
    ) {
      currentSection.value = section.id
    }
  })
}

const getTextColor = (bgColor) => {
  // Logic for determining text color based on background color
  const darkColors = ['#800080', '#000000']
  return darkColors.includes(bgColor) ? 'white' : 'black'
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
@keyframes fadeInMoveRight {
  0% {
    opacity: 0;
    transform: translateX(-30px); /* Start from slightly left */
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* End at the final position */
  }
}

.social-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
}

.item {
  padding: 10px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  margin: 0%;
  padding: 0%;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #800080;
  text-transform: uppercase;
  margin: 0%;
  padding: 5%;
}

h3 {
  font-family: monospace;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0%;
  /* padding: 5%; */
}
h1,
h2 {
  margin: 0;
  padding: 0;
  line-height: 1;
}

p,
li {
  font-family: monospace;
}

.title {
  font-size: 2.5rem;
  margin: 0%;
  font-weight: bold;
  color: #800080;
  text-transform: uppercase;
}

.portfolio-container {
  display: flex;
  min-height: auto;
  overflow-y: none;
  scroll-behavior: smooth;
  border: none;
}

.section {
  min-height: auto;
  padding: 40px;
  color: inherit;
  border-radius: 0;
  position: relative;
}

.content {
  flex-grow: 1;
  padding-left: 170px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.content h1,
h2,
h3,
p {
  animation: fadeInMoveRight 0.5s ease-in-out;
}

.sidebar {
  position: fixed;
  width: 150px;
  height: 100vh;
  padding: 20px;
  background: transparent;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar button {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background: none;
  color: black;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: 0.3s;
  font-size: small;
}

.sidebar button:hover,
.sidebar button.active {
  background: #800080;
  color: white;
  border-radius: 5px;
}

.social-buttons {
  margin: 20px 250px;
}

button {
  background: transparent;
  border: none;
  color: #800080;
  font-size: 20px;
}

button:hover i {
  background-color: transparent;
  border: none;
  color: white;
}

button i {
  font-size: 20px;
  transition: color 0.3s ease;
}

.section-content {
  animation: fadeInMoveRight 0.5s ease-in-out;
}
</style>

<script setup>
import projectsData from '../assets/projects.json'

// Define alternating background colors
const colors = ['#FF69B4', '#FFFFFF', '#800080', '#000000'] // Pink, White, Purple, Black

// Computed property to assign background and text colors
const getStyles = (index) => {
  const bgColor = colors[index % colors.length]
  const textColor = bgColor === '#800080' || bgColor === '#000000' ? '#FFFFFF' : '#000000'
  return { backgroundColor: bgColor, color: textColor }
}
</script>

<template>
  <div class="projects-container">
    <div
      v-for="(project, index) in projectsData"
      :key="project.title"
      class="project-card"
      :style="getStyles(index)"
    >
      <div class="content">
        <h1 class="title">{{ project.title }}</h1>
        <p class="description">{{ project.description }}</p>
        <p class="info"><strong>Date:</strong> {{ project.date }}</p>
        <!-- <p class="info"><strong>Category:</strong> {{ project.category }}</p> -->
        <a :href="project.link" target="_blank" class="github-link">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container to hold all projects */
.projects-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Each project card */
.project-card {
  width: 100%;
  min-height: 4in; /* Ensures each card is at least 4 inches tall */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  transition: background-color 0.5s ease;
}

/* Content inside each card */
.content {
  max-width: 800px;
  width: 100%;
}

/* Styling for project title */
.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Styling for description */
.description {
  font-size: 1rem;
  margin-bottom: 15px;
}

/* Additional project details */
.info {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

/* GitHub Link Button */
.github-link {
  display: inline-block;
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid currentColor;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>

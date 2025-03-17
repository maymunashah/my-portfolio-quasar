<template>
  <section v-if="!Screen.sm && !Screen.xs" class="intro">
    <div class="intro-content">
      <div class="profile-container">
        <img src="../assets/profile_foto3.jpeg" alt="Profile" class="profile-photo" />
      </div>
      <div class="text-content">
        <h2>MAYA SHAH</h2>
        <h1>AI DEVELOPER</h1>
        <h8>
          {{ ResumeData.description_front_page }}
        </h8>
        <div>
          <q-btn to="/techfolio" class="link">My Digital Footprint</q-btn>
          <q-btn href="/cv.pdf" target="_blank" class="link">Professional CV</q-btn>
        </div>
      </div>
    </div>
    <!-- large screen -->
  </section>

  <section v-else class="intro-content-small">
    <div class="row">
      <div class="text-content-small">
        <h2>MAYA SHAH</h2>
        <h1>AI DEVELOPER</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="profile-container">
          <img src="../assets/profile_foto3.jpeg" alt="Profile" class="profile-photo" />
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-8">
        <div class="text-content-small">
          <h6>
            {{ ResumeData.description_front_page }}
          </h6>
          <div class="row">
            <q-btn to="/techfolio" class="link">My Digital Footprint</q-btn>
            <q-btn href="/cv.pdf" target="_blank" class="link">My CV</q-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- small screens -->
  </section>

  <section>
    <div class="heading-container">
      <div class="line-icon"></div>
      <h1 class="heading">What I Do IN TECH.</h1>
    </div>
    <MySkills />
  </section>

  <section>
    <div class="heading-container">
      <div class="line-icon bg-accent"></div>
      <h1 class="heading">What I Do IN LIFE.</h1>
    </div>
    <MyActivities />
    <!-- <MySkills /> -->
  </section>

  <section>
    <div class="heading-container">
      <div class="line-icon bg-black"></div>
      <h1 class="heading">Testimonials</h1>
    </div>
    <div class="testimonial-wrapper q-mt-lg">
      <!-- Added class for spacing -->
      <TestimonialCards />
    </div>
  </section>

  <section>
    <div class="heading-container">
      <div class="line-icon bg-secondary"></div>
      <h1 class="heading text-secondary">Languages</h1>
    </div>
    <div class="text-black">
      <!-- Added class for spacing -->
      <h6 class="custom-heading">
        Oh did i mention i am a multilingual person. I speak Sindhi, urdu, english, italian and only
        very little of punjabi. plus some would say hindi and urdu are same but i disagree so i
        count that as a seperate language. fun fact: i can read arabic fluently without
        understanding anything at all(not joking at all) !
      </h6>
    </div>
  </section>
</template>

<script setup>
import { Screen } from 'quasar'
import MySkills from 'components/MySkills.vue'
import ResumeData from 'assets/resume.json'
import MyActivities from 'components/MyActivities.vue'
import TestimonialCards from 'components/TestimonialCards.vue'
// import flaws from 'components/MyFlaws.vue'
console.log(Screen)
</script>

<style scoped>
body {
  background-color: #fff8fc; /* Light pinkish white */
  margin: 0;
  padding: 0;
}

.heading-container {
  display: flex;
  align-items: center;
}

.line-icon {
  width: 10px; /* Wider line */
  height: 40px; /* Adjust the height of the line */
  background-color: purple; /* Purple color */
  margin-right: 15px; /* Space between line and heading */
  margin-left: 20px;
}

.heading {
  font-size: 2rem;
  font-family: Arial, sans-serif;
  color: black;
}

.intro {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  background-color: #fff8fc;
  color: black;
  margin-top: 20px;
}

.intro-content {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
}

.intro-content .text-content p {
  flex-wrap: wrap;
}
.profile-container {
  background-color: #fff;
  border-radius: 15px;
  border: 3px solid black;
  padding: 10px;
  margin-right: 20px;
  flex: 0 0 50%;
  display: flex;
  max-width: 300px;
  justify-content: center;
}

.profile-photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
  font-weight: bold;
  color: #800080;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.custom-heading {
  font-size: medium;
  color: #800080;
  font-family: monospace;
  line-height: normal;
  /* margin: 15px; */
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}

.link {
  display: inline-block;
  margin: 10px 10px;
  padding: 10px 20px;
  background-color: #ff69b4;
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #800080;
  color: black;
}

/* SMALL SCREENS STYLES */
.intro-content-small {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on small screens */
  justify-content: space-between; /* Space between the image and text */
}

.profile-container-small {
  background-color: #fff;
  border-radius: 15px;
  border: 3px solid black;
  padding: 10px;
  margin-right: 10px;
  flex: 0 0 40%; /* Adjust profile container width on small screens */
  max-width: 120px;
  justify-content: center;
}

.profile-photo-small {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.text-content-small {
  flex: 1 1 60%; /* Take up remaining space for text */
  padding-left: 10px; /* Add some space to the left of text */
}

.text-content-small p {
  margin-bottom: 10px; /* Space below text */
}

/* Targeting h1 and h2 within the .text-small-content class for small screens */
.text-content-small h1,
.text-content-small h2 {
  line-height: 1.2; /* Adjust line height */
}

.text-content-small h1 {
  font-size: 3rem; /* Specific font size for h1 */
}

.text-content-small h2 {
  font-size: 3rem; /* Specific font size for h2 */
}
</style>

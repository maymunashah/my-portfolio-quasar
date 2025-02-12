<template>
  <router-view />
</template>

<script setup>
//
import { useMeta } from 'quasar'

// Set the default meta title
useMeta({
  title: 'Maya shah - portfolio',
  meta: {
    description: {
      name: 'description',
      content: 'AI Engineer Portfolio showcasing projects, skills, and testimonials.',
    },
  },
})
</script>

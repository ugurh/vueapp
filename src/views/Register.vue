<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
<script>
export default {
  props: ['event'],
  methods: {
    register() {
      this.$router.push({ name : 'EventList'}); //Directly to the named path      
    }
  }
}

// Directly to the path with a single string
// this.$router.push('/about')

// Directly to the path with an object
// this.$router.push({ path: '/about' })

// Directly to the named path
// this.$router.push({ name: 'About' })

// With a dynamic segment as I showed above
// this.$router.push({ name: 'EventDetails', params: { id: 3 } })

// With a query ... resulting in /?page=2 in our example app
// this.$router.push({ name: 'EventList', query: { page: 2 } })

// Navigation & Replace
//this.$router.replace({ name: 'EventDetails', params: { id: 3 } })  

// Navigating the History Stack
// Go forward a record
// this.$router.go(1) 
// Go backward a record
// this.$router.go(-1)
</script>


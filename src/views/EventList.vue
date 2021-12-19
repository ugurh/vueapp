<template>
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard v-for="event in events" :key="event.id" :event = "event"/>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard";
import axios from "axios"

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data () {
    return {
      events : null
    }
  },
  created (){
    axios.get("https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events")
    .then(response => {
      this.events = response.data;
    }).catch(e =>{
      console.log(e);
    });
  }
};
</script>
<style scoped>
.events{
    align-items: center;
    display: flex;
    flex-direction: column;
}
</style>

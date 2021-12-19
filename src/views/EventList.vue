<template>
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard v-for="event in events" :key="event.id" :event = "event"/>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data () {
    return {
      events :[
          {
            id : 1,
            title : "Play Tennis",
            date : "2021-01-10",
            time : "15:30"
          },
          {
            id : 2,
            title : "Setup Meeting",
            date : "2021-02-10",
            time : "08:30"
          }
         ]
    }
    
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

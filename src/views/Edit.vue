<template>
  <p>Edit the event here</p>
</template>
<script>
export default {
  props: ['event'],
  data: function(){
    return {
      unsavedChanges: false
    }
  },
  beforeRouteLeave(routeTo, routeFrom, next) {
     if (this.unsavedChanges) {
      const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
      if (answer) {
        next() // <-- Confirms the navigation
      } else {
        next(false) // <-- Cancels the navigation
      }
    } else {
      next() // <-- Confirms the navigation
    }
  }
}
</script>
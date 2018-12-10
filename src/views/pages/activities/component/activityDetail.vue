<template>
	<div id="activityDetail">
    <x-header>This is the page title.</x-header>
    <p>{{data}}</p>
  </div>
</template>

<script>
	export default {
		name: "activityDetail",
    props:{
      data:{
        type:String
      }
    }
	}
</script>

<style scoped>

</style>

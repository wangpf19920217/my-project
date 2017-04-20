<template>
	<div>
		<nv-header></nv-header>
		<nv-cont></nv-cont>
		<nv-footer></nv-footer>
	</div>
</template>

<script>
	
	import nvHeader from '../components/header.vue';
	import nvCont from '../components/indexcont.vue';
	import nvFooter from '../components/footer.vue';
	
	console.log(nvHeader)
	
	export default {
	  data()  {
	    return{
	    }
	  },
	  components : {
			nvHeader,
			nvCont,
			nvFooter
		}
	}
</script>

<style>
</style>
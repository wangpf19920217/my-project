<template>
	<transition name="fade" class="router">
		<div class="navbox">
		    <div class="navcenter">
		        <a href="#" class="logo"></a>
		        <ul class="nav" id="index_nav">
		            <li v-bind:class="{ activeli: i.isactive }" v-for="i in headerinfo"><a href="#/index">{{ i.info }}</a></li>
		        <li class="nav_top_solid" style="position: absolute; left: 0px; width: 60px;"></li></ul>
		    </div>
		</div>
	 	<!--<router-link to="/about">路由标签 to:about页面</router-link>-->
	</transition>
</template>

<script>
	
	var headerinfo = {
			data1:{
	    		info:"首页",
	    		cla:'activeli',
	    		hrefTo:'index',
	    		isactive:true,
	    	},
	    	data2:{
	    		info:"解决方案",
	    		cla:'activeli',
	    		isactive:false,
	    	},
	    	data3:{
	    		info:"服务体系",
	    		cla:'activeli',
	    		isactive:false,
	    	},
	    	data4:{
	    		info:"大事记",
	    		cla:'activeli',
	    		isactive:false,
	    	},
	    	data5:{
	    		info:"投资频道",
	    		cla:'activeli',
	    		isactive:false,
	    	},
	    	data6:{
	    		info:"招贤纳士",
	    		cla:'activeli',
	    		isactive:false,
	    	}
	    };
	
	export default {
	  data()  {
	    return{
	    	headerinfo
	    }
	  },
	  computed:function(){
	     
	  },
	  methons:function(){
	  	
	  }
	}
</script>

<style>
</style>
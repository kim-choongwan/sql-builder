export default{
	name : 'main',
	template : 
`<main class="main" :style="{width:'calc(100% - '+(minuswidth+10)+'px)'}">
	<div class="view"><h5>main</h5></div>
</main>`,
	props:{
		minuswidth : {
			type:Number,
			required:true,
		}
	},
	data : function(){
		return {
		}
	},
	watch : {
	},
	methods : {
	},
	computed : {
	},
}

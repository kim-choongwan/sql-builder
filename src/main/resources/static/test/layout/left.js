export default{
	name : 'left',
	template : 
`<aside class="left_aside" :style="{ width: width+'px' }">
	<div class="view" ><h5>left</h5>
	</div>
</aside>`,
	props: {
		width :{
			type:Number,
			required:true,
		},
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

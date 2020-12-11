export default{
	name : 'right',
	template : 
`<aside class="right_aside" :style="{ width: width+'px' }">
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
			style : {
			}
		}
	},
	watch : {
	},
	methods : {
	},
	computed : {
	},
}

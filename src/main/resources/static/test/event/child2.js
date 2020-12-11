export default{
	name : 'child1',
	template : 
`<input v-model="message"/>`,
    created() {
    	this.eventBus.$on('child1-event',this.method1);
    },
	
	data : function(){
		return {
			message : ""
		}
	},
	methods : {
		method1 : function(){
			this.message = 'ok';
		},
	},
}

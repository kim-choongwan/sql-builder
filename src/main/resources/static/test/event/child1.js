export default{
	name : 'child1',
	template : 
`<button @click="method1">click!!</button>`,
	data : function(){
		return {
			message1 : this.customerValue1,
			message2 : this.customerValue2,
		}
	},
	methods : {
		method1 : function(){
			this.eventBus.$emit('child1-event');
		},
	},
	/*
	computed : {
		reversedMessage : function(){
			return this.message1.split('').reverse().join('');
		},
		now : function(){
			return Date.now();
		}
		,custom:{
			get: function(){
				return "";
			},
			set: function(newValue){
				
			}
		
		}
	},
	*/
}

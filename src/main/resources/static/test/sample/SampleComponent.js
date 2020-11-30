export default{
	name : 'SampleComponent',
	template : 
`<span @click="onClick">{{message1}} / {{message2}} / {{reversedMessage}} / {{now}}</span>`,
	
	beforeCreate  : function(){console.log('## beforeCreate  ')},
	created       : function(){console.log('## created       ')},
	beforeMount   : function(){console.log('## beforeMount   ')},
	mounted       : function(){console.log('## mounted       ')},
	beforeUpdate  : function(){console.log('## beforeUpdate  ')},
	activated     : function(){console.log('## activated     ')},
	deactivated   : function(){console.log('## deactivated   ')},
	beforeDestroy : function(){console.log('## beforeDestroy ')},
	destroyed     : function(){console.log('## destroyed     ')},
	errorCaptured : function(){console.log('## errorCaptured ')},
	
	props : {
		customerValue1 : {
			type:String,
			required:true,
		},
		customerValue2 : {
			type:String,
			required:true,
		},
	},
	data : function(){
		console.log('## data');
		return {
			message1 : this.customerValue1,
			message2 : this.customerValue2,
		}
	},
	watch : {
		message1 : function(newMessage){
			
		}
	},
	methods : {
		method1 : function(){
		},
		method2: function(){
		},
		onClick: function(){
			this.$emit('new-event',{m:'hi'});
		}
	},
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
}

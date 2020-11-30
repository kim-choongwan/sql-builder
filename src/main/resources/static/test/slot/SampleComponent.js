export default{
	name : 'SampleComponent',
	template : 
`<span @click="onClick">{{message1}} / {{message2}} / {{reversedMessage}} / {{now}}</span>`,
	
	beforeCreate : function(){},
	created : function(){},
	beforeMount : function(){},
	mounted : function(){},
	beforeUpdate : function(){},
	activated : function(){},
	deactivated : function(){},
	beforeDestroy : function(){},
	destroyed : function(){},
	errorCaptured : function(){},
	
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

export default{
	name : 'NavigationLink',
	template : 
`<a
  v-bind:href="url"
  class="nav-link"
>
  <slot>ddd</slot>
</a>`,
	
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
		url : {
		},
	},
	data(){
		return {
			href : this.url
		}
	},
	watch : {
	},
	methods : {
	},
	computed : {
	},
}

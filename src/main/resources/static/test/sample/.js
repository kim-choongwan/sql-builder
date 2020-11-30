export default{
	 name : 'ContextMenu'
			,template : 
`<div v-if="on == true">
	<ul>
		<li v-for="menu in menus">
			{{menu}}
		</li>
	</ul>
</div>`,
	props : {
		menus : {
			type:Array
			,required:true
		},
		meta : {
			type:Object,
		}
	},
	data : function(){
		console.log(this.menus);
		
		return {
			on : false
		}
	},
	methods : {
		open : function(){
			this.on = true;
		},
		close: function(){
			this.on = false;
		},
	},
}

/*
export let Directive = {
  bind: function (el, binding, vnode) {
	el.addEventListener('mousedown',function(){
		if ((event.button == 2) || (event.which == 3)) { // 우클릭
			//event.preventDefault();
			//vnode.context.$emit(vnode,'contextmenu', {some: 'event', data: 'here'});
			//vnode.context.cc();
		}
	});
  }
};
*/
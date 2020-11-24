import {
    eventOff,
    eventOn,
    filterVisible,
    isArray,
    keyCodes,
    selectAll,
    setAttr,
    getBCR,
    parentElementByClassName
} from '/js/com/utils.js'

export default{
	
	name : 'ContextMenu',
	template : 
`
<div 	v-if="show == true" 
		class="custom-context-menu" 
		:style="{top:y+'px',left:x+'px'}" 
		>
	<ul>
		<li v-for="menu in menus" @click="onMenu">
			{{menu}}
		</li>
	</ul>
</div>
<div v-if="show == true" class="dim" @click="dim" >sdfsdf</div>

`,
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
			show : false,
			x : 0,
			y : 0,
		}
	},
	methods : {
		open : function(e){
			if(this.show)
				return;
			this.x = e.clientX;
			this.y = e.clientY;
			this.show = true;
		},
		close: function(){
			this.show = false;
		},
		onMenu:function(){
			console.log('클릭되었다.');
			this.close();
		},
		onMouseleave(){
			console.log('onMouseleave.');
		},
		onMouseover(){
			console.log('onMouseover.');
		},
		onMouseout(){
			console.log('onMouseout.');
		},
		dim(){
			console.log('dim');
		}
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
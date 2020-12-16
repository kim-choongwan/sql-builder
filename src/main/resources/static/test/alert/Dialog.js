import Dim from '/components/layer/dim.js'
import Draggable from './Draggable.js'

const props = {
		title:{
			type:String,
		},
		top:{
			type:Number,
		},
		left:{
			type:Number,
		},
		width:{
			type:Number,
		},
		show:{
			type:Boolean,
		},
	};
const defaultxy = {
	top : 200
	width : 200
}

var Dialog = {
	name : 'Dialog',
	template : 
`
<dim v-if="show">
	<div class="dialog" :style="style">
		<div  class="dialog-header">
			<span v-draggable-handle class="dialog-title">{{title}}</span>
			<div class="dialog-close-btn" @click="onClick"><i class="fas fa-times" ></i></div>
		</div>
		<div class="dialog-contents">
			<slot></slot>
		</div>
	</div>
</dim>
`,
	props ,
	data : function(){
		const width = this.width||defaultxy.width
		const style = {};
		style.position = 'absolute';
		style.top  = (this.top|| defaultxy.top)+'px'; 
		style.left = (this.left||(window.innerWidth-width)/2)+'px'; 
		style.width = width+'px';
		return {
			style:style
		}
	},
	methods : {
		onClick(){
			this.show = false;
			this.$emit('close',{});
		},
		dd(){
			console.log(this.show);
		}
	},
	components: {
		Draggable,
	}
}

export default Dialog;

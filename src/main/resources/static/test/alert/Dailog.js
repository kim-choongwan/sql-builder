import Dim from '/components/layer/dim.js'

var Dialog = {
		name : 'Dialog',
		template : 
`
<dim v-if="show">
	<div class="dialog">
		<div class="dialog-header">
			<span class="dialog-title">{{title}}</span>
			<div class="dialog-close-btn" @click="onClick"><i class="fas fa-times" ></i></div>
		</div>
		<div class="dialog-contents">
			<slot></slot>
		</div>
	</div>
</dim>
`,
		props : {
			title:{},
			show:{},
		},
		data : function(){
			console.log('show',this.show);
			return {
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

	}

export default Dialog;

export default{
	name : 'splitterVertical',
	template : 
`<div class="splitter" @drag="onDrag" @dragend="onDragend"></div>`,
	created       : function(){
		
	}, 
	data : function(){
		return {
			isDragging: false,
			startX:0
		}
	},
	watch : {
	},
	methods : {
		onDrag : function(e){
			if(!this.isDragging){
				console.log(e.x);
				this.startX = e.x;
				this.isDragging = true;
			}
			this.$emit('move',e.x-this.startX);
		},
		onDragend : function(e){
			console.log('in');
			this.isDragging = false;
			console.log('dragend');
			this.$emit('moveend',e.x-this.startX);
		}
	},
	computed : {
	},
}

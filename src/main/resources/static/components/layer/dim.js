var arr = [10];
var next = function(){
	var max = Math.max.apply(null, arr);
	arr.push(++max);
	return max;
}

var turn = function(o){
	if(o==1000)
		return;
	var index = arr.indexOf(o)
	if(index<0){
		arr.splice(index, 1);
	}
}

//	

export default{
	name : 'dim',
	template : 
`<div class="dim" v-bind:style="style"><slot></slot></div>`,
	props : {
	},
	data : function(){
		var i = next();
		console.log(i);
		return {
			style : {
				zIndex :i 
			}
		};
	}
}		

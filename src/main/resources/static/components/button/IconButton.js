import ButtonInfo from './ButtonInfo.js';

export default{
	 name : 'IconButton'
			,template : 
`<span :class="{'iconbutton':iconbutton,'on':on}">
	<i	:class="classes"
		v-on="{ mousedown : mousedown
			   ,mouseup : mouseup
		       ,click : click
		       }" >
		<span v-if="texton=='on'" class="icon-button-text"> {{text}}</span>
	</i>	
</span>`
	,props : {
		type : {
			type:String
			,required:true
		},
		texton:{
			type:String
		}
	}
	,data : function(){
		var info = ButtonInfo[this.type]; //버튼정보
		return {
			classes : " "+info.iconClass+" fa-lg fa-border btn",
			iconbutton:true,
			on : false,
			text : info['text'],
		}
	}
	,methods : {
		mousedown(event){
			this.on = true;
		}
		,mouseup(event){
			this.on = false;
		}
		,click(event){
			this.$emit('beforeclick',event);
			ButtonInfo[this.type].onClick();
			this.$emit('click',event);
		}
	}
}


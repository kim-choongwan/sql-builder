import ButtonInfo from './ButtonInfo.js';

export default{
	 name : 'TextButton',
	template : 
`<span :class="{'iconbutton':iconbutton,'on':on}">
		<span class="icon-button-text  fa-border" 
			v-on="{ mousedown : mousedown,
					mouseup : mouseup,
					click : click,
		       }">{{text}}</span>

</span>`
	,props : {
		type : {
			type:String
			,required:true
		}
	}
	,data : function(){
		var info = ButtonInfo[this.type]; //버튼정보
		return {
			classes : " "+info.iconClass+" fa-lg fa-border btn",
			iconbutton:true,
			on : false,
			text : info.text,
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


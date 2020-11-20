export default{
	 name : 'IconButton'
	,template : `<span :class="{'iconbutton':iconbutton,'on':on}">
					<i :class="classes" aria-hidden="true"
						v-on="{ mousedown : mousedown
						,mouseup : mouseup
						,click : click
						}"
						style="cursor: pointer">
						<span class="icon-button-text"> {{text}}</span>
					</i>	
				</span>`
		
	,props : {
		icontype : {
			type:String
			,required : true
		}
		,text : {
			type:String
		}
	}
	,data : function(){
		return {
			 classes : " "+this.icontype+" fa-lg fa-border"
			,iconbutton:true
			,on : false
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
			this.$emit('click',event);
		}
	}
}


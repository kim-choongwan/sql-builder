/**
 * alert 창
 * alert 이라는 이벤트가 발생하면, 화면에 alert창이 뜬다.
 * 
 * 사용할 지 안할 지 모르겠으나, 모달 팝업을 하기 이전에 구현 해보도록 함.
 */


export default{
	name : 'alert',
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

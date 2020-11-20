import FileButton from './FileButton.js';
import ConnectButton from './ConnectButton.js';
import IconButton from './IconButton.js';

export default{
	 name : 'ToolBar'
	,template : `<div class="fa-border">
					<connect-button />
					<file-button />
					<icon-button icontype="fa fa-download" @click="custombutton" title="마음대로 버튼" text="삭제"/>
				</div>`
	,methods : {
		custombutton : function(){
			console.log("## custombutton clicked");
		}
	}
	,components:{
		FileButton
		,ConnectButton
		,IconButton
	}
}


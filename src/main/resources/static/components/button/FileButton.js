import IconButton from './IconButton.js';

export default{
	 name : 'FileButton'
	,template : `<icon-button icontype="fa fa-file" @click="onClick" title="File" />`
	,methods : {
		onClick(event){
			console.log('## 파일을 다운로드 한다.');
		}
	}
	,components:{
		IconButton
	}
}


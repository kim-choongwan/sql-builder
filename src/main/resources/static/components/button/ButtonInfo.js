export default{
	file : {
		name : 'File',
		tooltip : '파일',
		text : '파일',
		iconClass : "fa fa-file",
		onClick : function(event){
			console.log('## 파일을 연다.');
		},
	},
	connection : {
		name : 'Connection',
		tooltip : 'DB Connection',
		text : '접속',
		iconClass : "fa fa-plug",
		onClick : function(event){
			console.log('DB를 접속한다.');
		},
	},
	download : {
		name : 'Download',
		tooltip : 'Download',
		text : '다운로드',
		iconClass : "fa fa-download",
		onClick : function(event){
			console.log('## 파일을 다운로드 한다.');
			// 기능은 다른 곳에서 가져와서(import)해서 사용할 수 있다.
		},
	},
}


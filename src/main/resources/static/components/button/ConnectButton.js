import IconButton from './IconButton.js';

export default{
	 name : 'ConnectButton'
	,template : `<icon-button icontype="fa fa-plug" @click="onClick" title="Connect DB" />`
	,methods : {
		onClick(event){
			console.log('## db connection pop-up');
		}
	}
	,components:{
		IconButton
	}
}


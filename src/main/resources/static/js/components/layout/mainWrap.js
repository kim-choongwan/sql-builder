import topWrap 			from "./topWrap.js";
import resizing 		from "../common/resizing.js";
import containerWrap 	from "./containerWrap.js";
export default{
	name : `mainWrap`,
	template : `<main class="wrap main">
					<top-wrap :items="items"></top-wrap>
					<resizing className="sizingX" targetClass="top~container"></resizing>
					<container-wrap :items="items"></container-wrap>
				</main>`,
	data : function(){
		return {
			items : {
				TABLES : [
					{
						TABLE_NAME : '',
						ELEMENTS : {
							COLUMNS : [],
							INDEXS : [],
							CONSTRAINTS : []
						}
					}
				],
				VIEWS : [],
				FUNCTIONS : [],
				TRIGGERS : []
			}
		}
	},
	created(){
		let elementObject = {};
		elementObject.COLUMNS = [];
		elementObject.INDEXS = [];
		elementObject.CONSTRANINTS = [];
		let tableList = [];
		for(let index = 0; index < 10; index++){
			let table = {};
			table["table"+index] = elementObject;
			tableList.push(table);
		}
		let items = {};
		items.TABLES = tableList; 
		items.VIEWS = ['view1','view2','view3'];
		items.FUNCTIONS = ['function1','function2','function3'];
		items.TRIGGERS = ['trigger1','trigger2','trigger3'];
		this.items = items;
	},
	components : {
		topWrap,
		resizing,
		containerWrap
	}
}
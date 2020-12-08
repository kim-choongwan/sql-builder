import menuTree from "../common/menuTree.js";
export default{
	name : `leftWrap`,
	template : `<aside class="wrap left">
					<section class="search-l"></section>
					<nav class="item">
						<menu-tree :items="items"/>
					</nav>
				</aside>`,
	props : {
		items : {
			type : Object,
			required : true
		}
	},
	components : {
		menuTree
	}
}
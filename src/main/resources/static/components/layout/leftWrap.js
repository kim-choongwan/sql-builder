import menuTree from "../common/menuTree.js";
export default{
	name : `leftWrap`,
	template : `<aside class="wrap left">
					<section class="search">
						<select name="kategorie" style="width : 30%;">
							<option value="all" selected>ALL</option>
							<option v-for="(value, key) in items" :key="key" :value="key">
								{{ key }}
							</option>
						</select>
						<input type="text" name="keyword" style="width : 53%;">
						<button @click="search" style="width : 15%;">Search</button>
					</section>
					<nav class="menu">
						<menu-tree v-for="(value, key) in items" :key="key" :element="value" :title="key" />
					</nav>
				</aside>`,
	props : {
		items : {
			type : Object,
			required : true
		}
	},
	data : function(){
		return {
			kategorie : null,
			keyword : null
		}
	},
	methods : {
		search(){
			
		}
	},
	components : {
		menuTree
	}
}
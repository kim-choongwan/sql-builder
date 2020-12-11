import menuNode from "./menuNode.js";
import menuHeader from "./menuHeader.js";
export default{
	name : `tree`,
	template : `<ul class="init">
					<li :id="title">
						<menu-header :title="title" :size="element.length"/>
						<menu-node v-if="showFlag" 
								   v-for="(value, key) in element" 
								   :element="value"
								   :key="key"
						/>
					</li>
				</ul>
	`,
	props : {
		element : {
			type : [Object,Array],
			required : true
		},
		title : {
			type : String,
			required : true
		}
	},
	data : function() {
		return {
			showFlag : false
		}
	},
	components : {
		menuHeader,
		menuNode
	}
}
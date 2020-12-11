import menuHeader from "./menuHeader.js";
export default{
	name : `menuNode`,
	template : `<ul>
					<li v-if="typeof(element) === 'string'">
						<menu-header :title="element"/>
					</li>
					<li v-else-if="!Array.isArray(element)" v-for="(value, key) in element" :key="key" :id="key">
						<menu-header :title="key" :size="Object.keys(value).length"/>
						<menu-node v-if="showFlag" v-for="(element, title) in value" :key="title" :element="element" :iden="key + '-' + title"/>
					</li>
					<li v-else :id="iden">
						<menu-header :title="kategorie" :size="element.length" :iden="iden"/>
						<menu-node v-if="showFlag" v-for="(value, index) in element" :element="value" :key="index"/>
					</li>
				</ul>
	`,
	props : {
		element : {
			type : [Array,Object,String],
			required : true
		},
		iden : {
			type : String
		},
		title : {
			type : String
		}
	},
	data : function(){
		return {
			showFlag : false
		}
	},
	computed : {
		kategorie(){
			return this.iden.split("-")[1];
		}
	},
	components : {
		menuHeader
	}
}
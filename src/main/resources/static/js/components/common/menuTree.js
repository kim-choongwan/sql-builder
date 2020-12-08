import menuNode from "./menuNode.js";
import menuHeader from "./menuHeader.js";
export default{
	name : `tree`,
	template : `<ul class="init">
					<li :id="title">
						<p :class="className"  @click="down">
							<span class="menu-icon"></span>
							{{ title }}
						</p>
						<menu-node v-if="showFlag" v-for="(value, index) in item" :element="value" :key="index"/>
					</li>
				</ul>
	`,
	props : {
		item : {
			type : [Array,  Object],
			required : true		
			
		},
		title : {
			type : String,
			required : true
		},
		size : {
			type : Number,
			required : true
		}
	},
	data : function() {
		return {
			showFlag : false
		}
	},
	methods : {
		down(){
			if(this.className.indexOf("-empty") > 0){
				return;
			}
			let target = document.querySelector("#".concat(this.title).concat(" > p"));
			let cn = target.className.replace("item-", "");
			target.className = target.className.replace(cn, (cn === "up" ? "down" : "up"));
			this.showFlag = !this.showFlag;
		}
	},
	computed : {
		className(){
			return "item-".concat(this.size > 0 ? "up" : "empty");
		}
	},
	components : {
		menuHeader,
		menuNode
	}
}
export default{
	name : `tree`,
	template : `<p :class="className" @click="clickFn">
					<span class="menu-icon"></span>
					{{ title }}
				</p>
	`,
	props : {
		title : {
			type : String,
			required : true
		},
		size : {
			type : Number,
			default : -1
		},
		iden : {
			type : String
		}
	},
	methods : {
		clickFn(){
			if(this.size <= 0){
				return;
			}
			let self = document.querySelector('#' + this.title + " > p");
			if(!self){
				self = document.querySelector('#' + this.iden + " > p");
			}
			let selfClass = self.className;
			let status = selfClass.replace("menu-","");
			let changeClass = selfClass.replace(status, status === "up" ? "down" : "up");
			self.className = changeClass;
			this.$parent.showFlag = !this.$parent.showFlag;
		}
	},
	computed : {
		className(){
			return "menu-".concat(
					this.size > 0 ? "up" 
							: this.size == 0 ? "empty" 
									: "item" 
			);
		}
	}
}		
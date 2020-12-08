export default{
	name : `tree`,
	template : `<p :class="className"  @click="down">
					<span class="menu-icon"></span>
					{{ title }}
				</p>
	`,
	props : {
		
	}

}		
export default{
	name : `menuNode`,
	template : `<ul>
					<template v-if="typeof(element) === 'string'">
						<li>
							{{ element }}
						</li>
					</template>
					<template v-else>
						<li v-for="(value, key) in element" :key="key" :id="key">
							<p :class="Object.keys(value).length > 0 ? 'item-up' : 'item-empty'"><span class="menu-icon"></span>{{ key }}</p>
						</li>
					</template>
				</ul>	
	`,
	props : {
		element : {
			type : [Array,Object,String],
			required : true
		}
	}
}
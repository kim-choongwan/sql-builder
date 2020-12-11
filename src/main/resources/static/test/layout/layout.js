import LayoutHeader from './header.js'
import LayoutLeft from './left.js'
import LayoutMain from './main.js'
import LayoutRight from './right.js'
import LayoutFooter from './footer.js'
import SplitterVertical from './splitterVertical.js'

export default{
	name : 'SampleComponent',
	template : 
`<div>
	<layout-header></layout-header>
	<div class="center">
		<layout-left :width="leftWidth"></layout-left>
		<splitter-vertical  v-on:move="onLeftMove"  v-on:moveend="onLeftMoveend"></splitter-vertical>
		<layout-main :minuswidth="leftWidth+rightWidth"></layout-main>
		<layout-right :width="rightWidth"></layout-right>
		<splitter-vertical v-on:move="onRightMove"  v-on:moveend="onRightMoveend" ></splitter-vertical>
	</div>
	<layout-footer></layout-footer>

</div>`,
	data : function(){
		return {
			leftWidth : 200,
			rightWidth : 200,
			leftStartWidth : 0 ,
			rightStartWidth : 0 
		}
	},
	watch : {
	},
	methods : {
		onLeftMove:function(x){
			if(this.leftStartWidth==0){
				this.leftStartWidth = this.leftWidth;
			}
			this.leftWidth = this.leftStartWidth+x;
		},
		onLeftMoveend:function(x){
			this.leftWidth = this.leftStartWidth+x;
			this.leftStartWidth=0;
		},
		onRightMove:function(x){
			if(this.rightStartWidth==0){
				this.rightStartWidth = this.rightWidth;
			}
			this.rightWidth = this.rightStartWidth-x;
		},
		onRightMoveend:function(x){
			this.rightWidth = this.rightStartWidth-x;
			this.rightStartWidth=0;
		},
	},
	computed : {
	},
	components:{
		LayoutHeader,
		LayoutLeft,
		LayoutMain,
		LayoutRight,
		LayoutFooter,
		SplitterVertical,
	}
}

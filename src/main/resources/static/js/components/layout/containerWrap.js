import leftWrap 	from "./leftWrap.js";
import centerWrap 	from "./centerWrap.js";
import rightWrap	from "./rightWrap.js";
import resizingL 	from "../common/resizing.js";
import resizingR 	from "../common/resizing.js";

export default{
	name : `containerWrap`,
	template : `<section class="wrap container">
					<leftWrap :items="items"></leftWrap>
					<resizing-l className="sizingY" targetClass="left~center"></resizing-l>
					<centerWrap></centerWrap>
					<resizing-r className="sizingY" targetClass="right~center"></resizing-r>
					<rightWrap></rightWrap>
				</section>`,
	props : {
		items : {
			type: Object,
			required : true
		}
	},
	components : {
		leftWrap,
		centerWrap,
		rightWrap,
		resizingL,
		resizingR
	}
}
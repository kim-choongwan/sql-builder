import left from "./left.js";
import center from "./center.js";
import right from "./right.js";
import splitterL from "../common/splitter.js";
import splitterR from "../common/splitter.js";

export default{
	name : `contents`,
	template : `<section class="contents">
					<left/>
					<splitter-l/>
					<center/>
					<splitter-r/>
					<right/>
				</section>
	`,
	components : {
		left,
		splitterL,
		center,
		splitterR,
		right
	}
}
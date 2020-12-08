export default{
	name : `resizeing`,
	template : `<div :class="className" @mousedown.left="start">
				</div>`,
	props : {
		className : {
			type : String,
			required : true
		},
		targetClass : {
			type : String,
			required : true
		}
	},
	data : function() {
		return {
			moveFlag : true,
			main : null,
			mainPos : 0,
			sub : null,
			subPos : 0,
			way : ''
		}
	},
	methods : {
		start(){
			try{
				this.moveFlag = false;
				this.init();
			}catch(e){
				console.error(e);
			}finally{
				document.onmouseup = this.stop;
				document.onmousemove = this.move;
			}
		},
		move(event){
			if(this.moveFlag){
				return;
			}
			let movePos = this.mainPos - event[this.way.charAt(0) === 'W' ? 'x' : 'y'];
			let mainMovePos = this.mainPos - movePos;
			this.main.style = this.getPx(mainMovePos);
			let subMovePos = this.subPos + movePos;
			this.sub.style = this.getPx(subMovePos);
		},
		stop(){
			this.moveFlag = true;
			document.onmouseup = null;
			document.onmousemove = null;

		},
		init(){
			let targets = this.targetClass.split('~');
			if(targets.length !== 2){
				return;
			}
			this.main = document.querySelector('.'+targets[0]);
			console.log(this.main.style);
			this.sub = document.querySelector('.'+targets[1]);
			if(this.main === null || this.sub === null){
				throw new Error("main~sub");
			}
			this.way = targets[0] === 'top' ? 'Height' : 'Width';
			this.mainPos = this.main['client'+this.way];
			this.subPos = this.sub['client'+this.way];
		},
		getPx(value){
			return [this.way.toLowerCase(),' : ', value , 'px;'].join('');
		}
	}
}
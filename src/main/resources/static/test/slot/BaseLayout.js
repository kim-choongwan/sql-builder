export default{
	name : 'BaseLayout',
	template : 
`<div class="container">
  <header>
    <slot name="header"></slot>  
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>  </header>
  </footer>
</div>`,
	
	props : {
	},
	data(){
		return {
		}
	},
	watch : {
	},
	methods : {
	},
	computed : {
	},
}

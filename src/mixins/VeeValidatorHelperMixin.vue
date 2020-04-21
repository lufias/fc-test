<script>
	/*
	Script start
	 */
	import { Component } from 'vue-property-decorator'	
	import Vue from 'vue'
	import async from 'async'

	@Component
	export default class VeeValidatorHelperMixin extends Vue {

		VeeValidatorHelperMixin_validateAll(scope){			
			return new Promise((resolve, reject)=>{				
				
				// simulate validateAll()
				const fieldNames = this.$validator.fields.items.filter(f=>f.scope==scope).map( f => `${scope}.${f.name}`)
				async.each(fieldNames, (fieldName, callback)=>{				
					this.$validator.validate(fieldName)
					.then(()=>{ callback() })
					.catch((err)=>{ callback(err) })
				},
				(err)=>{
					if(err){ reject(err) }
					else{ resolve(true) }
				})	
			})


		}

	}

</script>
<style scoped>
	.error-input{
		border-color: red;
	}

	.tab{
		text-align: center;
	}

	.tab .active{
		background-color: lightskyblue;
		color: #fff;
	}
</style>

<template>
	<div class="container">
		<div class="row d-flex justify-content-center">
			<div class="col-md-6">

				<div class="row mb-3 tab" v-if="activeScope <=2">
					<div class="col ml-3" :class="{active:activeScope==0}">Account Details</div>
					<div class="col" :class="{active:activeScope==1}">Profile Info</div>
					<div class="col mr-3" :class="{active:activeScope==2}">Work Info</div>
				</div>

				<!-- account details -->
				<form v-if="activeScope == 0" @submit.prevent="submit" data-vv-scope="accountdetails" novalidate :key="activeScope">
			
					<div class="form-group">
						<label for="email">Email address</label>
						<input 
							type="email" 
							class="form-control" 
							:class="{'error-input':errors.has('accountdetails.email')}"  				
							name="email" 				
							id="email" 
							aria-describedby="email" 
							placeholder="Enter email"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							@focus="errors.remove('email', 'accountdetails')"
							ref="email"
						>
						<span 
							v-if="errors.has('accountdetails.email')"
							class="help-block text-danger">{{ errors.first('accountdetails.email') }}
						</span>
					</div>

					<div class="form-group">
						<label for="password">Password</label>
						<input 
							type="password" 
							class="form-control" 
							:class="{'error-input':errors.has('accountdetails.password')}"  				
							name="password" 				
							id="password" 
							aria-describedby="password" 
							placeholder="Enter password"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							@focus="errors.remove('password', 'accountdetails')"
							ref="password"
						>
						<span 
							v-if="errors.has('accountdetails.password')"
							class="help-block text-danger">{{ errors.first('accountdetails.password') }}
						</span>
					</div>

					<div class="form-group">
						<label for="confirmPassword">Password</label>
						<input 
							type="password" 
							class="form-control" 
							:class="{'error-input':errors.has('accountdetails.confirmPassword')}"  				
							name="confirmPassword" 				
							id="confirmPassword" 
							aria-describedby="confirmPassword" 
							placeholder="Enter confirmation password"
							v-validate="`required|confirmed:password`"										
							data-vv-validate-on="blur"
							data-vv-as="confirm password"
							@focus="errors.remove('confirmPassword', 'accountdetails')"
						>
						<span 
							v-if="errors.has('accountdetails.confirmPassword')"
							class="help-block text-danger">{{ errors.first('accountdetails.confirmPassword') }}
						</span>
					</div>

					<button type="submit" class="btn btn-primary float-right">Continue</button>

				</form>		


				<!-- profile -->
				<form v-if="activeScope == 1" @submit.prevent="submit" data-vv-scope="profile" novalidate :key="activeScope">

					<div class="form-group">
						<label for="fullName">Full Name</label>
						<input 
							type="text" 
							class="form-control" 
							:class="{'error-input':errors.has('profile.fullName')}"  				
							name="fullName" 				
							id="fullName" 
							aria-describedby="fullName" 
							placeholder="Enter Full Name"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							data-vv-as="full name"
							@focus="errors.remove('fullName', 'profile')"							
							ref="fullName" 
						>
						<span 
							v-if="errors.has('profile.fullName')"
							class="help-block text-danger">{{ errors.first('profile.fullName') }}
						</span>
					</div>

					<div class="form-group">
						<label for="dateOfBirth">Date Of Birth</label>
						<input 
							type="date" 
							class="form-control" 
							:class="{'error-input':errors.has('profile.dateOfBirth')}"  				
							name="dateOfBirth" 				
							id="dateOfBirth" 
							aria-describedby="dateOfBirth" 
							placeholder="Select Date Of Birth"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							data-vv-as="date of birth"
							@focus="errors.remove('dateOfBirth', 'profile')"							
						>
						<span 
							v-if="errors.has('profile.dateOfBirth')"
							class="help-block text-danger">{{ errors.first('profile.dateOfBirth') }}
						</span>
					</div>

					<div class="form-group">
						<div class="row">
													
							<div class="col-3">
								<label for="areaCode">Code</label>
								<input 
									type="number" 
									class="form-control" 
									:class="{'error-input':errors.has('profile.areaCode')}"  				
									name="areaCode" 				
									id="areaCode" 
									aria-describedby="areaCode" 
									placeholder="60"
									v-validate="`required`"										
									data-vv-validate-on="blur"
									data-vv-as="area code"
									@focus="errors.remove('areaCode', 'profile')"
									value="60"							
								>
							</div>

							<div class="col-9 pl-0">
								<label for="phoneNumber">Phone Number</label>
								<input 
									type="tel" 
									class="form-control" 
									:class="{'error-input':errors.has('profile.phoneNumber')}"  				
									name="phoneNumber" 				
									id="phoneNumber" 
									aria-describedby="phoneNumber" 
									placeholder="eg: 175436654"
									v-validate="`required`"										
									data-vv-validate-on="blur"
									data-vv-as="phone number"
									@focus="errors.remove('phoneNumber', 'profile')"							
								>
							</div>

							<div class="col">
								<span 
									v-if="errors.has('profile.areaCode')"
									class="help-block text-danger">{{ errors.first('profile.areaCode') }}
								</span>
								<span 
									v-if="errors.has('profile.phoneNumber')"
									class="help-block text-danger">{{ errors.first('profile.phoneNumber') }}
								</span>
							</div>
						</div>
							
					</div>

					<button type="submit" class="btn btn-primary float-right">Continue</button>

				</form>

				<!-- works -->
				<form v-if="activeScope == 2" @submit.prevent="submit" data-vv-scope="works" novalidate :key="activeScope">
					<div class="form-group">
						<label for="jobTitle">Job Title</label>
						<input 
							type="text" 
							class="form-control" 
							:class="{'error-input':errors.has('works.jobTitle')}"  				
							name="jobTitle" 				
							id="jobTitle" 
							aria-describedby="jobTitle" 
							placeholder="Enter Job Title"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							data-vv-as="job title"
							@focus="errors.remove('jobTitle', 'works')"							
							ref="jobTitle" 
						>
						<span 
							v-if="errors.has('works.jobTitle')"
							class="help-block text-danger">{{ errors.first('works.jobTitle') }}
						</span>
					</div>

					<div class="form-group">
						<label for="companyName">Company Name</label>
						<input 
							type="text" 
							class="form-control" 
							:class="{'error-input':errors.has('works.companyName')}"  				
							name="companyName" 				
							id="companyName" 
							aria-describedby="companyName" 
							placeholder="Enter Company Name"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							data-vv-as="company name"
							@focus="errors.remove('companyName', 'works')"
						>
						<span 
							v-if="errors.has('works.companyName')"
							class="help-block text-danger">{{ errors.first('works.companyName') }}
						</span>
					</div>

					<div class="form-group">
						<label for="workSummary">Work Summary</label>						
						<textarea 
							class="form-control"
							:class="{'error-input':errors.has('works.workSummary')}"
							name="workSummary"
							aria-describedby="workSummary" 
							placeholder="Work Summary" 
							id="workSummary" cols="30" rows="10"
							v-validate="`required`"										
							data-vv-validate-on="blur"
							data-vv-as="work summary"
							@focus="errors.remove('workSummary', 'works')"
						></textarea>
						<span 
							v-if="errors.has('works.workSummary')"
							class="help-block text-danger">{{ errors.first('works.workSummary') }}
						</span>
					</div>

					<button type="submit" class="btn btn-primary float-right">Continue</button>
				</form>

				<div v-if="activeScope > 2">
					<h2>Success!</h2>
				</div>

			</div>
		</div>
		

	</div>
	
	
</template>

<script>
	
	import Vue from 'vue'
	import { mixins } from 'vue-class-component'
    import { Component } from 'vue-property-decorator'
    import { namespace, Getter, Action, Mutation } from 'vuex-class'
    import VeeValidatorHelperMixin from '@mixins/VeeValidatorHelperMixin'



    // no need to store data as we simplmy want to demo validation
    const AccountModule = namespace('account')
	
	@Component
    export default class FormPage extends mixins(VeeValidatorHelperMixin) {

    	scopes = ['accountdetails', 'profile', 'works']
    	activeScope = 0

    	mounted(){
    		this.$refs.email.focus()
    	}

    	submit(){
    		this.VeeValidatorHelperMixin_validateAll(this.scopes[this.activeScope])
			.then(()=>{				
				
				if(this.errors.any()){					
					return false 
				}

				else {
					this.activeScope++
					if(this.activeScope == 1){this.$nextTick(() => this.$refs.fullName.focus())}
					if(this.activeScope == 2){this.$nextTick(() => this.$refs.jobTitle.focus())}
				}

				

			})	
    	}  

    	

    }

</script>
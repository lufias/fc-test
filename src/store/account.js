import _ from 'lodash'

const formDataPristine = {
	email: '',
	password: '',
	confirmPassword: '',
	fullName: '',
	dateOfBirth: '',
	phoneAreaCode: '',
	phoneNumber: '',
	jobTitle: '',
	companyName: '',
	workSummary: ''
}

const state = {
	formData : _.cloneDeep(formDataPristine)
}

const getters = {
	formData: state => state.formData
}

const mutations = {
	setFormMainData(state, {key, value}){state.formData[key] = value}
}


export const account = {
	state,
	getters,
	mutations,
	namespaced:true	
}
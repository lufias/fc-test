import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { card } from './card'
import { account } from './account'

export const store = new Vuex.Store({
	modules: { 		  
    	card,
    	account  	
	}	
})

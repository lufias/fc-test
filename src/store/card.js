const getFullDeck = ()=>{

	const deck = []

	const suites = ['D', 'C', 'H', 'S']
	const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

	suites.forEach( s =>{
		ranks.forEach( r => {
			deck.push({
				suite: s,
				rank: r,
				name: `${s}${r}`,
				image: `${s}${r}.png`
			})
		})
	})

	return deck
}

const state = {
	deck: getFullDeck(),
	selectedCard : []
}

const getters = {
	deck: state => state.deck,
	suitesLeft: state => suite => _.countBy(state.deck, {suite}).true,
	selectedCard: state => state.selectedCard
}

const mutations = {
	shuffle(state){
		state.deck = _.shuffle(state.deck);
	},
	resetDeck(state){
		state.deck = getFullDeck()
	},
	serveCards(state){
		if(state.deck.length){
			state.selectedCard = state.deck.splice(0,4)	
		}
		
	}
}

export const card = {
	state,
	getters,
	mutations,
	namespaced:true	
}
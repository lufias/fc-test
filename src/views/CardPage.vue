<style scoped>
	.btn {		
		width: 100px;
	}

	.info {
		background-color: #666;
		border-radius: 10px;
	}

	.container {
		text-align: center;
	}
</style>

<template>

	<div class="container">

		<div class="mb-5">
			<button @click="reset" class="btn btn-outline-dark rounded mr-2">Reset</button>	
			<button @click="clickDrawCard" class="btn btn-outline-dark rounded">Draw</button>	
		</div>
		

		<div class="row">
			<div class="col-6 col-md-3">
				<img class="card-image img-fluid" v-if="deckFull" :src="require('@assets/images/cards/Back.png')" alt="card">
				<img class="card-image img-fluid" v-else :src="require(`@assets/images/cards/${selectedCard[0].image}`)" alt="card">
			</div>

			<div class="col-6 col-md-3">
				<img class="card-image img-fluid" v-if="deckFull" :src="require('@assets/images/cards/Back.png')" alt="card">
				<img class="card-image img-fluid" v-else :src="require(`@assets/images/cards/${selectedCard[1].image}`)" alt="card">
			</div>

			<div class="col-6 col-md-3">
				<img class="card-image img-fluid" v-if="deckFull" :src="require('@assets/images/cards/Back.png')" alt="card">
				<img class="card-image img-fluid" v-else :src="require(`@assets/images/cards/${selectedCard[2].image}`)" alt="card">
			</div>

			<div class="col-6 col-md-3">
				<img class="card-image img-fluid" v-if="deckFull" :src="require('@assets/images/cards/Back.png')" alt="card">
				<img class="card-image img-fluid" v-else :src="require(`@assets/images/cards/${selectedCard[3].image}`)" alt="card">
			</div>

		</div>

		<div class="row mt-3">
			<div class="col p-3 info">
				<p class="my-auto text-light" v-if="!deckEmpty">You have {{ suitesLeft('D') }} Diamonds, {{ suitesLeft('C') }} Clubs, {{ suitesLeft('H') }} Hearts, and {{ suitesLeft('S') }} Spades left. </p>
				<p v-else class="text-light">Your deck is empty.</p>
			</div>
		</div>
	</div>
  	


</template>

<script>
	
	import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import { namespace, Getter, Action, Mutation } from 'vuex-class'

    const CardModule = namespace('card')
	
	@Component
    export default class CardPage extends Vue {  

    	@CardModule.Getter deck
    	@CardModule.Getter suitesLeft
    	@CardModule.Getter selectedCard

    	@CardModule.Mutation resetDeck
    	@CardModule.Mutation shuffle
    	@CardModule.Mutation serveCards


    	mounted(){
    		
    		this.reset()
    	}

    	reset(){
    		// reset and shuffle the deck
    		this.resetDeck()
    		this.shuffle()
    	}

    	clickDrawCard(){
    		this.serveCards()    		
    	}    	

    	get deckFull(){ return this.deck.length == 52 }
    	get deckEmpty(){ return this.deck.length == 0 }


    }

</script>

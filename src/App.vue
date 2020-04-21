<style lang="scss">


    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;      
      color: #2c3e50;
      min-height: 100vh;      
    }    

    #nav {

      text-align: center;
      
      padding: 30px;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
      }
    }
}
</style>

<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Card</router-link> |
            <router-link to="/form">Form</router-link>
        </div>
        <router-view/>
    </div>
</template>


<script>

    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import { namespace, Getter, Action, Mutation } from 'vuex-class'

    // Validator using vee-validator
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);

    @Component
    export default class className extends Vue {  



    }

</script>

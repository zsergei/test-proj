<template>
  <div class="w-full max-w-xs h-full max-h-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submitHandler">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input type="email" v-model="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input type="password" v-model="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
    </div>
    </form>
  </div>
</template>


<script>
//import {doLogin} from '../components/base'

export default {
  auth : 'guest',
  data () {
    return {
        username: '',
        password: '',
    }
  },
  methods: {
    submitHandler() {
        var $this = this
        this.$auth.loginWith('local', 
          { data: { username: this.username, password: this.password }
        }).then( res => {
          console.log(res)
          console.log($this.$auth.loggedIn) //Вроде должен вот этот параметр меняться на true, если залогинились
          this.$router.push('/users');
        }).catch((err) => console.log(err));
        

        /*let param = { data: { username: this.username, password: this.password }}
        doLogin('local', param)
          .then( res => {
            console.log(res)
            console.log($this.$store.$auth.$state.loggedIn)
            this.$router.push('/users');
          }).catch((err) => console.log(err))*/
    },
  }
}
</script>
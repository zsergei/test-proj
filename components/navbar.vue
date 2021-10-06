<template>
  <nav class="flex items-center justify-between flex-wrap bg-emerald-200 p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
      </div>
      <div>
        <a v-if="!loggedIn" href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-emerald-500 hover:bg-white mt-4 lg:mt-0">Sign In</a>
        <a v-if="!loggedIn" href="/registration" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-emerald-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
        <a v-if="loggedIn" href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-emerald-500 hover:bg-white mt-4 lg:mt-0" @click="logout">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      loggedIn: false,
    }
  },
  mounted() {
    this.loggedIn = this.$auth.loggedIn
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>


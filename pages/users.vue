<template>
  <table class="table-fixed w-1/4">
    <thead>
    <tr class="bg-gray-200">
      <th class="w-1/2 text-left">E-mail</th>
      <th class="w-1/4 text-left">First Name</th>
      <th class="w-1/4 text-left">Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in usersInfo" :key="row.id">
      <td>{{ row.email }}</td>
      <td>{{ row.name }}</td>
      <td>{{ row.lname }}</td>
    </tr>
  </tbody>
  </table>
</template>

<script>
import {apiGetCall} from '../components/base'

export default {
  middleware: 'auth',
  //auth : 'guest',

  data () {
    return {
      usersInfo: Array,
    }
  },
  mounted() {
    apiGetCall('/users')
      .then(res => {
        /*this.usersInfo = [
          { email: "email1@gmail.com", name: "name1", lname: "lname1" },
          { email: "email2@gmail.com", name: "name2", lname: "lname2" },
          { email: "email3@gmail.com", name: "name3", lname: "lname3" },
        ]*/
        this.usersInfo = res
      })
  }
}
</script>
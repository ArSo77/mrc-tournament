<template>
  <div>
    <button @click="generateUsers(16)">GenUsers</button>
    <button @click="generateRaces(users)">GenRaces</button>
    <hr>
    Players:
    <br>
      {{ users }}
    <hr>
      {{ races }}
    <hr>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import useUser from '@/composable/useUser';
import useRace from '@/composable/useRace';

export default {
  name: 'UsersView',
  setup() {
    const { users, generateUsers } = useUser({})
    const {  races, generateRaces } = useRace()

    generateUsers(15)
    generateRaces(users)

    return {
      users,
      races,
      generateUsers,
      generateRaces,
    };
  },
};
</script>

<style scoped>

</style>

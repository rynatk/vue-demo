<template>
  <div class="pa4 code ">
    {{user.id}} has been a user {{user.created | timeSince}}
  </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  async asyncData({ route }) {
    // route.params.id matches _id from the filename
    const response = await axios.get(`/user/${route.params.id}.json`);
    return { user: response.data };
  }
}
</script>
<template>
  <div class="register">
    <login />
  </div>
</template>

<script>

import Register from '@/components/register/RegisterComponent.vue';

export default {
  components: {
    Register,
  },
};
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

</script>

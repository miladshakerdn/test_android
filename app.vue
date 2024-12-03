<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->
<template>
  <div>
    <h1>Loading...</h1>
  </div>
</template>

<script setup>
import { Browser } from '@capacitor/browser';

const openWebsite = async () => {
  await Browser.open({ url: 'https://app.lavantrip.com' });
};

openWebsite();
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
}
</style>
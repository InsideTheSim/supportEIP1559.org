<template>
  <div class="text-center">
    <a :href="`https://twitter.com/intent/tweet?text=${tweetText}&url=https://supporteip1559.org&hashtags=supportEIP1559,Ethereum`" target="_blank" ref="nofollow, noopener" class="button">
      Tweet your support for EIP-1559
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tweetText: `I support the implementation of EIP-1559 to improve the user experience of Ethereum network transactions.`
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
}
</style>
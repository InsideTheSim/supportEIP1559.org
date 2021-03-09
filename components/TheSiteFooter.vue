<template>
  <div class="the-site-footer container p-4 pb-8 text-center">
    <p class="text-gray-700 text-sm pb-4 dark:text-gray-400">
      Want to talk about it? Join us in <a class="text-blue-500" href="https://reddit.com/r/ethfinance" rel="noopener" target="_blank">r/ethfinance</a>.<br>
    </p>
    <p class="text-gray-700 text-sm pb-4 dark:text-gray-400">
      Think this is neat? Check out my other project: <a class="text-blue-500" href="https://ratiogang.com" rel="noopener" target="_blank">💪&nbsp;<strong class="ml-1">RatioGang</strong>&nbsp;📈</a><br>
    </p>
    <p class="text-gray-600 text-sm dark:text-gray-500">
      &copy; {{ year }} — Hosted with <span class="mr-1">❤️</span> by <a href="https://www.reddit.com/user/InsideTheSimulation" target="_blank" ref="nofollow, noopener">u/InsideTheSimulation</a> | <a href="https://twitter.com/InsideTheSim" target="_blank" ref="nofollow, noopener">@insideTheSim</a></p>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>

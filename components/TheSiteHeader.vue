<template>
  <div class="the-site-header container flex flex-col xs:flex-row items-center justify-center pb-2 pt-4 md:pt-8 px-2">
    <div class="logo-container">
      <h1 class="text-2xl md:text-3xl text-center font-black text-gray-800 dark:text-gray-300">
        <span class="dance">🔥</span> #SupportEIP1559 <span class="dance">🔥</span>
      </h1>
      <div class="text-center text-gray-700 text-sm md:text-md dark:text-gray-400">
        <p>Protect Ethereum’s transaction user experience from <strong>attack</strong> by a vocal minority of miners <strong>led by Flexpool</strong>.</p>
      </div>
    </div>
    <div class="site-options flex-shrink-0 flex-grow ml-2 sm:ml-3 md:ml-8">
      <vSelect
        key="theme"
        v-model="$colorMode.preference"
        :reduce="option => option.id"
        :searchable="false"
        :options="[
          {
            id: 'system',
            label: '🌗 Auto'
          },
          {
            id: 'light',
            label: '☀️ Light'
          },
          {
            id: 'dark',
            label: '🌙 Dark'
          }
        ]"
        :clearable="false"
        :filterable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@keyframes dance {
  0% {
    transform: scaleX(1);
  }
  49% {
    transform: scaleX(1)
  }
  50% {
    transform: scaleX(-1);
  }
  99% {
    transform: scaleX(-1);
  }
}

.dance {
  display: inline-block;
  animation-name: dance;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}

.the-site-header {
  max-width: 500px;
}

.site-options {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.25em;
  cursor: pointer;

  @media (min-width: 400px) {
    display: block;
    max-width: 75px;
    padding-top: 0.25em;
  }

  & > .v-select {
    width: 100%;
    max-width: 75px;

    &:first-child {
      margin-right: 0.5em;

      @media (min-width: 400px) {
        margin-right: 0;
        margin-bottom: 0.1em;
      }
    }
  }

  & ::v-deep .vs__dropdown-toggle {
    @apply dark:border-gray-600;
    padding-bottom: 0;
    cursor: pointer;
    min-height: 25px;
  }

  & ::v-deep .vs__search {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
  }
  & ::v-deep .vs__actions {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
  }
  & ::v-deep .vs__selected {
    @apply dark:text-gray-400;
    font-size: 0.75em;
    width: 100%;
    white-space: nowrap;
    margin: 0;
    padding: 0.25em;
    word-spacing: 0.33em;
    text-align: center;
    display: block;
  }
  & ::v-deep .vs__selected-options {
    width: 100%;
    text-align: center;
  }
  & ::v-deep .vs__open-indicator {
    display: none;
    @apply text-gray-400;
    @apply dark:text-gray-400;
    transform: scale(0.5);
    fill: currentColor;
  }
  & ::v-deep .vs__dropdown-menu {
    @apply dark:bg-gray-700;
    min-width: 75px;
    top: 100%;

    .vs__dropdown-option {
      @apply dark:text-gray-400;
      font-size: 0.85em;
      word-spacing: 0.33em;
      padding: 3px 5px;
    }
  }
}
</style>

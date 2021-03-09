<template>
  <div class="page-content">
    <div class="px-4 py-2 flex-1 mt-8 flex flex-col overflow-x-hidden">
      <div class="pb-16 max-w-screen-sm m-auto">
        <h2 class="text-3xl mb-8 text-center font-bold text-gray-800 leading-tight dark:text-gray-300">
          The Situation
        </h2>

        <p><strong>There is now an official <a href="https://github.com/ethereum-cat-herders/1559-outreach/blob/main/README.md" target="_blank" ref="nofollow, noopener">supporting projects list for EIP-1559</a>.</strong></p>

        <p><strong>On February 26th, 2021 at 1400 UTC a <a href="https://www.youtube.com/watch?v=EdXhL6VR0mU&feature=youtu.be" target="_blank" ref="nofollow, noopener">community call</a> will take place to discuss the implementation of <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md" target="blank" ref="nofollow, noopener">EIP-1559</a>.</strong> A resistance to EIP-1559 has been led by Flexpool who has been invited to attend the call to  "... push for accommodation in a friendly respectful manner" on behalf of miners while simultaneously operating and hosting the inflammatory website <a href="https://stopEIP1559.org" target="_blank" ref="nofollow, noopener">stopEIP1559.org</a>.</p>

        <p>This website is dedicated to rallying the Ethereum community together to <strong>show our support for implementing EIP-1559 without compromise</strong> and without "gifts" through the attachment of unrelated "riders". We must be aware when we are in a debate with those who do not argue in good faith - and
        <strong>we must place the health and overall benefit of the Ethereum network user-experience above political strong-arming</strong>.</p>

        <TweetSupport class="mt-8 mb-12" />

        <h2 class="text-3xl mb-8 text-center font-bold text-gray-800 leading-tight dark:text-gray-300">
          The Call - February 26th @ 1400 UTC
        </h2>
        <div class="relative mb-8 mt-8" style="padding-top: 56.25%">
          <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/EdXhL6VR0mU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div
          v-if="mounted"
          class="reddit-holder"
          :data-expand="redditExpand"
        >
          <h3 class="text-center text-lg font-bold mb-2 text-gray-800 leading-tight dark:text-gray-300">
            Latest update from u/Bob-Rossi on February 25th, 2021:
          </h3>
          <p>The original inspiration for this site came from information compiled by reddit user u/Bob-Rossi. Daily updates are being provided Bob-Rossi up until the day of the call. I will embed the latest update here each day for easy reference.</p>
          <div class="inner">
            <div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="true" data-embed-uuid="2cdb923c-b244-493a-afaf-a669321a1e35" data-embed-created="2021-02-25T15:09:30.636Z"><a href="https://old.reddit.com/r/ethfinance/comments/lrzn8b/daily_general_discussion_february_25_2021/gop7chb/">Comment</a> from discussion <a href="https://old.reddit.com/r/ethfinance/comments/lrzn8b/daily_general_discussion_february_25_2021/">Daily General Discussion - February 25, 2021</a>.</div><script async src="https://www.redditstatic.com/comment-embed.js"></script>

            <div
              @click="toggleRedditExpand"
              class="read-more text-red-500"
            >
              Read More
            </div>
          </div>
        </div>
      </div>

      <div class="pb-16 max-w-screen-sm m-auto">
        <h2 class="text-3xl mb-8 text-center font-bold text-gray-800 leading-tight dark:text-gray-300">
          Helpful Resources
        </h2>

        <ul>
          <li><a href="https://hackmd.io/@timbeiko/why-1559" target="_blank" ref="nofollow, noopener">Why 1559?</a> - by <a href="https://twitter.com/TimBeiko" target="_blank" ref="nofollow, noopener">@TimBeiko</a></li>
          <li><a href="https://youtu.be/MGemhK9t44Q" target="_blank" ref="nofollow, noopener">EIP 1559 Explained - Youtube Video (15 mins)</a></li>
          <li><a href="https://www.reddit.com/r/ethfinance/comments/lj7mf1/supporteip1559_protect_ethereums_transaction_user/" target="_blank" ref="nofollow, noopener">"#SupportEIP1559" - r/ethFinance stickied discussion</a></li>
          <li><a href="https://www.reddit.com/r/ethereum/comments/lk1rjp/this_is_why_eip_1559_is_good_and_why_vitalik/" target="_blank" ref="nofollow, noopener">"This is why EIP 1559 is good" - r/Ethereum discussion</a></li>
        </ul>
      </div>
      <div class="container pb-16">
        <FrequentlyAskedQuestions />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mounted: false,
      redditExpand: false
    }
  },
  mounted () {
    this.mounted = true
  },
  methods: {
    toggleRedditExpand () {
      this.redditExpand = true
    }
  }
}
</script>

<style lang="scss" scoped>
.reddit-holder {
  margin-bottom: 2em;

  &[data-expand] {
    .inner {
      max-height: 999em;
      border-bottom: 1px solid transparent;

      &::after,
      .read-more {
        opacity: 0;
        pointer-events: none;
      }

    }
  }

  p {
    margin-bottom: 0;
  }

  .inner {
    .dark & {
      filter: invert(1) hue-rotate(180deg);
    }

    min-height: 300px;
    max-height: 300px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    position: relative;
    transition: max-height 2s ease-in, border-bottom 0.5s linear;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      bottom: 0;
      opacity: 1;
      transition: opacity 0.5s ease-out;
      background: linear-gradient(to bottom, rgba(#fff, 0), rgba(#fff, 0.9) 90%);
    }

    .read-more {
      position: absolute;
      text-transform: uppercase;
      z-index: 2;
      font-weight: bold;
      bottom: 0.5em;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 0 1em 0 rgba(#000, .15);
      padding: 0.5em 1.5em;
      border-radius: 999em;
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.5s ease-out;

      &:hover {
        background: #f3f3f3;
        filter: contrast(110%);
      }
    }
  }
}
</style>

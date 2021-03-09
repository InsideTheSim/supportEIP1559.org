<template>
  <div
    class="faqs max-w-screen-sm m-auto"
  >
    <h2 class="text-3xl mb-8 text-center font-bold text-gray-800 leading-tight dark:text-gray-300">
      Common Questions
    </h2>
    <div class="question pb-8">
      <h3 class="text-2xl mb-4 font-bold text-gray-700 leading-tight dark:text-gray-400">
        What is EIP-1559?
      </h3>
      <p><em>"A transaction pricing mechanism that includes fixed-per-block network fee that is burned and dynamically expands/contracts block sizes to deal with transient congestion."</em></p>

      <p>As a result - <strong>transaction fees are much more predictable for users on the Ethereum network</strong>. This prevents cases of users submitting transactions using a "safe" gas price only to have their transaction become stuck or fail as the cost of a "safe" transaction increases after their submission.</p>

      <p>You can learn more about EIP-1559 in detail here: <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md" target="
      blank" ref="nofollow, noopener">https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md</a></p>

      <p>The following Twitter thread is also a highly educational lesson on the history of the EIP. Click through to read the whole thread.</p>

      <div class="tweet-wrapper">
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">EIP-1559 needs a history lesson because it’s a bit revised right now. Here it goes...<br><br>In early 2019 I finally hit peak frustration at how horrible Ethereum’s first-price auction model for fees was. <br><br>I truly thought (and still think!) it was the #1 barrier to mass adoption.</p>&mdash; eric.eth (@econoar) <a href="https://twitter.com/econoar/status/1359373681466568713?ref_src=twsrc%5Etfw">February 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>

    <div class="question pb-8">
      <h3 class="text-2xl mb-4 font-bold text-gray-700 leading-tight dark:text-gray-400">
        What benefits does EIP-1559 offer to users?
      </h3>
      <ul>
        <li>Fees - while not necessarily cheaper - will become <strong>far more predictable</strong>. This allows users and wallets to avoid overpaying for transactions, which is a common problem with the current fee model.</li>
        <li>Because the new <code>basefee</code> will be predictable - <strong>on-chain gas oracles will be possible</strong> for use by other applications.
        <li>An important aspect of this fee system is that <strong>miners only get to keep the inclusion fee</strong> along with the block reward. The base fee is always burned (i.e. it is destroyed by the protocol).</li>
        <li>This ensures that <strong>only ETH can ever be used to pay for transactions on Ethereum</strong>, cementing the economic value of ETH within the Ethereum platform and reducing risks associated with miner extractable value (MEV).</li>
        <li>Additionally, this burn <strong>counterbalances Ethereum inflation</strong> while still giving the block reward and inclusion fee to miners.</li>
        <li>Finally, ensuring the miner of a block does not receive the base fee is important because it <strong>removes miner incentive to manipulate the fee</strong> in order to extract more fees from users.</li>
      </ul>

      <p>This video does an excellent job breaking down the changes and I highly recommend you watch it.</p>

      <div class="relative mb-8 mt-8" style="padding-top: 56.25%">
        <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/MGemhK9t44Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <div class="question pb-8">
      <h3 class="text-2xl mb-4 font-bold text-gray-700 leading-tight dark:text-gray-400">
        That sounds great! Why is there a limited cartel of miners opposing it led by Flexpool?
      </h3>
      <p>A byproduct of the design of EIP-1559 is that the new "base fee" is burned rather than paid out to miners. Despite transaction fees increasing to ridiculous rates in recent months - resulting in large overpayment for network security - miners want to protect inflated costs to users at the expense of the overall user-experience of Ethereum.</p>

      <p>Despite the fact that an implementation of EIP-1559 would minimally reduce income - in most forecasts setting it back to levels that would have been common several months ago - a vocal minority of miners led by <strong>Flexpool wants to <a href="https://www.reddit.com/r/EtherMining/comments/l1u2pa/support_eip3143_to_compensate_for_reduced_fee/gk1kq29/?utm_source=share&utm_medium=web2x&context=3" target="_blank" ref="nofollow, noopener">arbitrarily increase the block reward</a></strong> in response to EIP-1559 and continue to extract painfully high fees from users in order to line their own pockets. <a href="https://www.reddit.com/r/ethereum/comments/lk1rjp/this_is_why_eip_1559_is_good_and_why_vitalik/gnj19uk?utm_source=share&utm_medium=web2x&context=3" target="_blank" ref="nofollow, noopener">This runs counter to the majority of Ethereum user's preferred monetary policy of minimum necessary issuance (pointed out by very recently by Vitalik).</a> Flexpool has expressed no concern for the overall health of the Ethereum network and the damage that could be done by prioritizing their currently inflated profit generation above the overall health of the Ethereum network.</p>
    </div>

    <div class="question">
      <h3 class="text-2xl mb-4 font-bold text-gray-700 leading-tight dark:text-gray-400">
        What can I do to help?
      </h3>
      <p>
        Don't be silent! Express your voice on Reddit, Twitter (using <a href="https://twitter.com/search?q=%23supportEIP1559&src=recent_search_click&f=live" target="_blank" ref="nofollow, noopener">#SupportEIP1559</a>), and all other crypto social media channels proclaiming that you won't support miners harming the user experience of the Ethereum network through their own self-interest.
      </p>

      <TweetSupport class="mt-8 mb-8" />

      <ul>
      <li>If you are an Ethereum 2.0 validator please consider changing your graffiti tag to <code>#SupportEIP1559</code>.</li>

      <li>
        Also, please consider sharing this website as a resource to educate others and get them involved in pushing back against harmful rent-seeking on the Ethereum network.
      </li>

      <li>Lastly, if you are a miner who supports EIP-1559, consider switching to a pool that has endorsed EIP-1559 in order to ensure that your hashpower is promoting the overall health of the Ethereum network.</li>
      </ul>

      <p class="text-center mt-8 mb-16">
        <img src="/support-1559.png">
      </p>
    </div>

    <div class="question">
      <h3 class="text-2xl mb-4 mt-16 font-bold text-gray-700 leading-tight dark:text-gray-400">
        Supporting Pools
      </h3>
      <p>
        Looking for somewhere to point your hash power that openly supports EIP-1559?
      </p>

      <div class="grid flex flex-row justify-between align-top text-center text-xs">
        <a
          v-for="pool in pools"
          :key="pool.name"
          :href="pool.url"
          target="_blank"
          ref="nofollow, noopener"
        >
          <img :src="pool.logo" />
          <span>{{ pool.name }} — <a :href="pool.source" target="_blank" ref="nofollow, noopener">(Source)</a></span>
        </a>
      </div>

      <p class="text-center">Know of more? Let me know: <a href="https://www.reddit.com/user/InsideTheSimulation" target="_blank" ref="nofollow, noopener">u/InsideTheSimulation</a> or <a href="https://twitter.com/InsideTheSim" target="_blank" ref="nofollow, noopener">@insideTheSim</a></p>
    </div>

    <div class="question">
      <h3 class="text-2xl mb-4 mt-16 font-bold text-gray-700 leading-tight dark:text-gray-400">
        Supporting Dapps & Partners
      </h3>
      <p>
        These Ethereum Dapps & ecosystem partners have voiced their support for EIP-1559.
      </p>

      <div class="grid text-center text-xs">
        <a
          v-for="dapp in dapps"
          :key="dapp.name"
          :href="dapp.url"
          :data-rounded="true"
          target="_blank"
          ref="nofollow, noopener"
        >
          <img :src="dapp.logo" />
          <span>{{ dapp.name }} — <a :href="dapp.source" target="_blank" ref="nofollow, noopener">(Source)</a></span>
        </a>
      </div>

      <p class="text-center">Know of more? Let me know: <a href="https://www.reddit.com/user/InsideTheSimulation" target="_blank" ref="nofollow, noopener">u/InsideTheSimulation</a> or <a href="https://twitter.com/InsideTheSim" target="_blank" ref="nofollow, noopener">@insideTheSim</a></p>
    </div>
  </div>
</template>

<script>
import { pools, dapps } from '~/libs/lists'

export default {
  data () {
    return {
      pools,
      dapps
    }
  }
}

</script>

<style lang="scss" scoped>
.question {
  margin: 0 auto;
}

.tweet-wrapper {
  display: flex;
  justify-content: center;
}

.grid {
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .dark & {
    @apply text-red-500;
  }

  @media (min-width: 1000px) {
    width: 140%;
    margin-left: -20%;
  }
  @media (min-width: 1300px) {
    width: 180%;
    margin-left: -40%;
  }

  span, a {
    .dark & {
      color: inherit;
    }
  }

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 200px;
    padding: 1.5em;
    margin: 0.5em;
    background: #f7fafd;
    border-radius: 5px;
    width: 45%;
    transition: transform 0.1s ease-out;
    box-shadow: 0 0 0.5em 0 rgba(#000, 0.05);

    .dark & {
      background: #283444;
      box-shadow: 0 0 0.5em 0 rgba(#000, 0.15);
    }

    &:hover {
      transform: scale(1.025);
    }

    @media (min-width: 1000px) {
      width: 32%;
    }
    @media (min-width: 1300px) {
      width: 22.5%;
    }

    &[data-rounded] {
      img {
        border-radius: 50%;
      }
    }

    img {
      background: #fff;
      border: 1px solid #ccc;
      margin-top: auto;
      margin-bottom: 1em;
      max-height: 100px;
      border-radius: 50%;
    }
  }

  span {
    display: block;
    margin-top: auto;
  }
}
</style>

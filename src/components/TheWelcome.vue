<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ $t('welcome.documentation.heading') }}</template>

    <p v-html="$t('welcome.documentation.text')"></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ $t('welcome.tooling.heading') }}</template>

    <p v-html="$t('welcome.tooling.text')"></p>

    <br />

    {{ $t('welcome.toolingMore') }}
    <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a
    >.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ $t('welcome.ecosystem.heading') }}</template>

    <p v-html="$t('welcome.ecosystem.text')"></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ $t('welcome.community.heading') }}</template>

    <p v-html="$t('welcome.community.text')"></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ $t('welcome.support.heading') }}</template>

    <p v-html="$t('welcome.support.text')"></p>
  </WelcomeItem>
</template>

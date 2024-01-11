<script setup>
import TitleHeader from "../components/Header.vue"

import { onMounted } from "vue";
onMounted(() => {
  twemoji.parse(document.body)
})
</script>

<template>
    <main class="home-page">
        <TitleHeader :subtext="'about'"/>
        <div class="about">
            <p>Hi, I'm kalcifur! I'm a hobbyist frontend developer from England. I spend most of my time listening to music, learning new software, watching video essays, or otherwise procrastinating. I have, in some capacity, both autism and ADHD, and I tend to shy away from (heavy) social interaction. If you would like to reach out to me, my socials are linked below.</p>
            <div class="platforms">
                <a href="https://discord.com/users/805490469051826246" target="_blank"><img src="../assets/icons/discord.svg" class="emoji" alt="discord icon">@kalcifur</a>
                <a href="https://steamcommunity.com/id/kalpaws" target="_blank"><img src="../assets/icons/steam.svg" class="emoji" alt="steam icon">/id/kalpaws</a>
                <a href="https://github.com/8uv" target="_blank"><img src="../assets/icons/github-mark.svg" class="emoji" alt="github icon">8uv</a>
                <a href="mailto:cola@keromail.com"><img src="../assets/icons/email.svg" class="emoji" alt="email icon">cola@keromail.com</a>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/_vars" as *;

.home-page {

    .about {
        max-width: 67.5%;

        @media (max-width: 700px) {
            max-width: 100%;
        }

        .platforms {
            @extend %tag-esque;
            margin: 15px 0;
            font-weight: 500;
            font-size: 1em;
            flex-wrap: wrap;

            p, a {
                margin: 6px 6px 0 0;
                text-decoration: none;
                // color: $light;
                color: inherit;
            }
        }
    }
}
</style>
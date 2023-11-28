<script setup>
import TitleHeader from "../components/Header.vue"

import { onMounted } from "vue";
onMounted(() => {
  twemoji.parse(document.body)
})
</script>

<template>
    <main class="projects-page">
        <TitleHeader :subtext="'projects'"/>
        <div class="about">
            <p>This is a loose collection of projects I've completed over the past few years. I have worked on much, much more than this, but a majority of it never gets finished. 🦊</p>

            <div class="projects">
                <div class="card">
                    <a href="https://github.com/8uv/roblox-userscripts" target="_blank">
                        <img src="https://opengraph.githubassets.com/8120f0c7aa70cb7d9ebd98295524dbe26c7896c7f3a39e4c0de99a1e05964f25/8uv/roblox-userscripts" alt="8uv/roblox-userscripts">
                    </a>
                </div>
                <div class="card">
                    <a href="https://github.com/8uv/roblox-chat-color-js" target="_blank">
                        <img src="https://opengraph.githubassets.com/8120f0c7aa70cb7d9ebd98295524dbe26c7896c7f3a39e4c0de99a1e05964f25/8uv/roblox-chat-color-js" alt="8uv/roblox-userscripts">
                    </a>
                </div>
            </div>

            <div class="hosts">
                <p>Some other things I host include:</p>
                <ul>
                    <li><a href="https://r.oblox.gay" target="_blank">r.oblox.gay</a>, a private akkoma instance</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/_vars" as *;

a {
    text-decoration: none;
    color: inherit;
}

.projects-page {
    .about {
        min-width: 60%;
        max-width: 75%;

        .projects {
            margin: 15px 0;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;

            .card {
                a {

                    img {
                        border-radius: .5vw;
                        max-width: 400px;

                        @media (max-width: 1000px) {
                            max-width: 256px;
                        }
                    }
                }
            }
        }

        .hosts {
            ul {
                margin: 6px 0;
                @extend %tag-inline;

                a {
                    text-decoration: underline 1px solid $accent;
                }
            }
        }
    }
}
</style>
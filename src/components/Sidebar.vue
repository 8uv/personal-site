<template>
    <aside>
        <div class="logo">
            <img :src="imgSrc" alt="logo">
        </div>

        <div class="menu">
            <router-link to="/" class="button" @click="twemoji.parse(document.body)">
                <img src="../assets/icons/home.svg" alt="house icon" class="menu-icon">
				<span class="text">Home</span>
			</router-link>
			<router-link to="/projects" class="button" @click="twemoji.parse(document.body)">
                <img src="../assets/icons/bookmark.svg" alt="bookmark icon" class="menu-icon">
				<span class="text">Projects</span>
			</router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from "vue"
import { useFavicon } from "@vueuse/core"

let imgSrc = ref("")
let uid = "805490469051826246"
$.get(`https://api.lanyard.rest/v1/users/${uid}`).then(res => {
    imgSrc.value = `https://cdn.discordapp.com/avatars/${uid}/${res.data.discord_user.avatar}.webp?size=4096`
    useFavicon(imgSrc)
})
</script>

<style lang="scss" scoped>
@use "../assets/_vars" as *;

aside {

    display: flex;
    flex-direction: column;

    background: $dark;
    color: $light;

    width: 230.4px;
    min-height: 100vh;

    transition: width 1s;

    .logo {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        padding: 16px 0;
        margin: 0 15px;

        img {
            width: 128px;
            border-radius: .4vw;
            transition: .65s;
        }
    }

    .menu {
        .button {
            color: inherit;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 4px;
            font-size: .85em;
            transition: .3s;

            * {
                padding: 4px;
            }

            .menu-icon {
                width: 24px;
                transition: .3s;
            }
        }

        .router-link-active {
            background: $grey;
            border-radius: 0 19.2px 19.2px 0;
            border-right: 10px solid $dark;
        }

    }
}
aside:not(:hover) {
    width: 48px;

    .logo {
        padding: 10px 0;
        justify-content: baseline;

        img {
            width: 32px;
        }
    }
    .menu > .button {
        border: none;
        border-radius: 0;
        justify-content: center;

        .text {
            opacity: 0;
            position: absolute;
        }

        .menu-icon {
            width: 32px;
        }
    }
}
</style>
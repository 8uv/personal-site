<script setup>
const props = defineProps({
    subtext: String
})
</script>

<template>
        <div class="title">
            <h1 class="sparkleP">kalcifur</h1>
            <div class="after">
                <p>he/they </p>
                <p title="gay">🏳️‍🌈</p>
            </div>
        </div>
        <p class="subtext">{{ subtext }}</p>
</template>

<style lang="scss" scoped>
@use "../assets/_vars" as *;

.title {
    font-weight: 800;
    margin-bottom: 15px;

    .after {
        @extend %tag-esque;
        user-select: none;
    }
}

.title, .after {
    display: flex;
    gap: 10px;
    align-items: baseline;
}

.subtext {
            text-transform: uppercase;
            color: $sub;
            font-weight: 700;
            font-size: .8em;
            line-height: 0;
            margin-bottom: 12px;
}
</style>
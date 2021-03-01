<template>
    <div class="nav">
        <button
            class="prev"
            @click="goNext(current - 1)"
        >
            ←
        </button>
        <button
            class="next"
            @click="goNext(current + 1)"
        >
            →
        </button>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

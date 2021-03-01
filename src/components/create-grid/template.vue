<template>
    <div class="page">
        <h1 class="title">Задание явной сетки</h1>
        <div>
            grid-template-columns: auto 200px 100px;
            <br>
            grid-template-rows: auto 50px 60px;
        </div>
        <div class="example center template">
            <div
                v-for="n in 9"
                :key="`templ-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

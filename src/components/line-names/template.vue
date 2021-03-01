<template>
    <div class="page">
        <h1 class="title">Имена grid-lines</h1>
        <div>
            grid-template-columns: [col-1-start] 1fr [col-1-end col-2-start] 1fr [col-2-end] 1fr [last];
            <br>
            grid-template-rows: 100px [middle] 100px;
        </div>
        <div class="named-lines">
            <div
                v-for="n in 6"
                :key="`lines-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
        <div>
            grid-template-columns: repeat(4, [start] 1fr [end]);
        </div>
        <div class="named-lines repeat">
            <div
                v-for="n in 8"
                :key="`lines-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

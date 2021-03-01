<template>
    <div class="page">
        <h1 class="title">Shorthand: grid-template</h1>
        <div>
            grid-template: none; - Обозначает, что явного грида не сущетвует
        </div>
        <div>
            grid-template: grid-template-rows / grid-template-columns
            <br>
            <br>
            grid-template: repeat(2, 80px 40px) / 1fr 2fr
        </div>
        <div class="gtr-gtc">
            <div
                v-for="n in 8"
                :key="`cell-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
        <div>
            grid-template: [[line-names] "area-string" row-size [line-names]]+ / grid-template-columns (нельзя использовать repeat)
            <br>
            <br>
            <img src="./grid-template.png" alt="">
        </div>
        <div class="with-gta">
            <div class="item zone1">
                zone1
            </div>
            <div class="item zone2">
                zone2
            </div>
            <div class="item zone3">
                zone3
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

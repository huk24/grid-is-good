<template>
    <div class="page">
        <h1 class="title">Именнованные области</h1>
        <div style="white-space: pre">
            Для обозначения областей используется свойство grid-template-areas
        </div>
        <img src="./template.png" alt="">
        <div>
            Для задания элементу области его расположения используется свойство grid-area
            <br>
            <br>
            grid-area: area-name || grid-row-start/grid-column-start/grid-row-end/grid-column-end
        </div>
        <div class="ex-area">
            <div class="item header" />
            <div class="item row3"  />
            <div class="item col2row2"  />
            <div class="item col1row1"  />
            <div class="item col2"  />
            <div class="item pos">
                grid-area: header-end / row3-end / col2-start
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

<template>
    <div class="page">
        <h1 class="title">Задания положения grid-items</h1>
        <div>
            Основные свойства отвещающие за позиционирование элемента:
            <br>
            <br>
            <b>Строка</b>: grid-row-start, grid-row-end.
            <br>
            <b>Shorthand</b>: grid-row: grid-row-start / grid-row-end
            <br>
            <br>
            <b>Столбец</b>: grid-column-start, grid-column-end.
            <br>
            <b>Shorthand</b>: grid-column: grid-column-start / grid-column-end
            <br>
            <br>
            Возможные параметры для изначальных свойства: порядковый номер линии / название линии {порядковый номер}? / span количество линий
        </div>
        <div class="line-pos">
            <div class="item">
                grid-row-start: -2;<br>
                grid-row-end: -1;<br>
                grid-column-start: 2;<br>
                grid-column-end: 4;
            </div>
            <div class="item">
                grid-row: first-end;<br>
                grid-column: col-start 2;
            </div>
            <div class="item">
                grid-row: 1;<br>
                grid-column: span 2 / col-end 2;
            </div>
            <div class="item">
                grid-row: 1 / span 2;<br>
                grid-column-end: -1;
            </div>
            <div class="item">
                grid-row: span 2;
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

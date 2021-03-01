<template>
    <div class="page">
        <h1 class="title">Отступы между ячейками</h1>
        <div>
            column-gap - отступ между треками колонок
            <br>
            <br>
            row-gap - отступ между треками строк
            <br>
            <br>
            Shorthand: gap: row-gap /  column-gap
            <br>
            <br>
            В версиях firefox 59-60, safari 10.1-11.1 (iOS 10.3-11.4) - grid-column&#8209;gap / grid-row&#8209;gap / grid&#8209;gap
        </div>

        <div class="row-example">
            <div class="example">
                <div
                    v-for="n in 6"
                    :key="`cell-${n}`"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
            <div class="example second">
                <div
                    v-for="n in 6"
                    :key="`cell2-${n}`"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

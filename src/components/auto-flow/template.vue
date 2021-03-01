<template>
    <div class="page">
        <h1 class="title">Grid auto flow</h1>
        <div>
            grid-auto-flow: row / column / dense / column dense
            <br>
            Задает порядок автомотического положения элементов
        </div>
        <div>
            row - Заполнение идет слева направо построчно. Значение по умолчанию
        </div>
        <div class="example">
            <div
                v-for="n in 6"
                :key="`lines-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
        <div>
            column - Заполнение идет сверху вниз поколоночно.
        </div>
        <div class="example column">
            <div
                v-for="n in 6"
                :key="`lines-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
        <div>
            dense - Дополнительный параметр, если указан пытается заполнить пустоты в сетке.
            <br>
            dense / row dense - построно
            <br>
            column dense - поколоночно
        </div>
        <div class="row-example">
            <div class="dense row">
                <div
                    v-for="(el, index) in dense"
                    :key="`lines2-${index}`"
                    :style="`grid-column-end: span ${el};`"
                    class="item"
                >
                    {{ index + 1 }}
                </div>
            </div>
            <div class="vertical-line"/>
            <div class="dense">
                <div
                    v-for="(el, index) in dense"
                    :key="`lines23-${index}`"
                    :style="`grid-column-end: span ${el};`"
                    class="item"
                >
                    {{ index + 1 }}
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

<template>
    <div class="page">
        <h2 class="title">
            Глоссарий
        </h2>
        <div>
            1. <b>Grid container (контейнер)</b> - элемент на котором примененно свойство display: grid | <span class="nobr">inline-grid</span>.
            На картинке эллемент с классом container.
        </div>
        <div class="row-example">
            <img
                class="container"
                src="./container.png"
            >
        </div>
        <div>
            2. <b>Grid (сетка)</b> - сетка образованная внутри grid container. Может состоять из явной и неявной сетки.
        </div>
        <div class="example gr-exp">
            <div
                v-for="n in 6"
                :key="`cell-${n}`"
                class="item"
            />
        </div>
        <div>
            3. <b>Grid items</b> - элементы являющиеся прямыми потомками grid-container.
            На картинки эллементы с классом item. Sub-item им не является.
        </div>
        <div class="row-example">
            <img
                class="container"
                src="./container.png"
            >
        </div>
        <div>
            4. <b>Grid line</b> - разделительные линии создающие структуру сетки.
            Они могут быть вертикальными(образующими колонки) или горизонтальными(образующими строки).
        </div>
        <div class="example lines">
            <div
                v-for="n in 6"
                :key="`lines-${n}`"
                class="item"
            />
        </div>
        <div>
            5. <b>Grid cell(клетки)</b> - пространство между двумя соседними горизонталньыми и вертикальными линиями.
        </div>
        <div class="example lines">
            <div
                v-for="n in 6"
                :key="`cell-${n}`"
                class="item"
                :class="{ active: n === 2 }"
            />
        </div>
        <div>
            6. <b>Grid track</b> - пространство между двумя соседними горизонталньыми или вертикальными линиями.
            Иначе строки или столбцы сетки
        </div>
        <div class="tracks">
            <div class="example lines">
                <div
                    v-for="n in 6"
                    :key="`cell-${n}`"
                    class="item"
                    :class="{ active: n === 2 || n === 5 }"
                />
            </div>
            <div class="example lines">
                <div
                    v-for="n in 6"
                    :key="`cell-${n}`"
                    class="item"
                    :class="{ active: n === 4 || n === 5 || n === 6 }"
                />
            </div>
        </div>
        <div>
            7. <b>Grid area</b> - пространство между двумя горизонталньыми и вертикальными линиями.
            Может состоять их любого количества клеток. Всегдо должно составлять прямоугольную область.
        </div>
        <div class="tracks">
            <div class="example lines">
                <div
                    v-for="n in 6"
                    :key="`cell-${n}`"
                    class="item"
                    :class="{ active: n === 2 || n === 3 }"
                />
            </div>
            <div class="example lines">
                <div
                    v-for="n in 6"
                    :key="`cell-${n}`"
                    class="item"
                    :class="{ active: n === 1 || n === 2 || n === 4 || n === 5 }"
                />
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

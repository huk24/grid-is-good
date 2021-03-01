<template>
    <div class="page">
        <h1 class="title">Place items</h1>
        <div>
            Свойства grid item: <br>
            <b>justify-self</b> - горизонтальное положение grid item внутри grid-area
            <br>
            <b>align-self</b>  - вертикальное положение grid item внутри grid-area
            <br>
            <br>
            Shorthand:  <b>place-self</b>: &lt;align-self&gt; / &lt;justify-self&gt;
            <br>
            <br>
            Свойства контейнреа: <br>
            <b>justify-items / align-items</b> - задает значение justify-self / align-self у всех элементов контейнера
            <br>
            <br>
            Shorthand:  <b>place-items</b>: &lt;align-items&gt; / &lt;justify-items&gt;
            <br>
            <br>
            Возможные значения: start / end / center / stretch
        </div>
        <div>
            justify-self
        </div>
        <div class="justify place-exempls">
            <div
                v-for="(item,index) in place"
                :key="`test1${index}`"
                class="item"
                :style="`justify-self: ${item}`"
            >
                {{ item }}
            </div>
        </div>
        <div>
            justify-self
        </div>
        <div class="align place-exempls">
            <div
                v-for="(item,index) in place"
                :key="`test2${index}`"
                class="item"
                :style="`align-self: ${item}`"
            >
                {{ item }}
            </div>
        </div>
        <div>
            place-self
        </div>
        <div class="place place-exempls">
            <template
                v-for="(align, indx) in place"
            >
                <div
                    v-for="(justify,index) in place"
                    :key="`test3-${index}-${indx}`"
                    class="item"
                    :style="`place-self: ${align} ${justify};`"
                >
                    align: {{ align }} <br>
                    justify: {{ justify }}
                </div>
            </template>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

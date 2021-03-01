<template>
    <div class="page">
        <h1 class="title">Place content</h1>
        <div>
            <b>justify-content</b>  - горизонтальное положение сетки внутри контейнера
            <br>
            <br>
                <b>align-content</b>  - вертикальное положение сетки внутри контейнера
            <br>
            <br>
            Shorthand:  <b>place-content</b>:  &lt;align-content&gt; / &lt;justify-content&gt;
            <br>
            <br>
            Возможные значения: start / end / center / stretch / space-around / space-between / space-evenly
        </div>
        <div class="place-exempls">
            <div
                v-for="(item,index) in place"
                :key="`test${index}`"
                class="ex"
                :class="[ item ]"
            >
                <div class="title">
                    {{ item }}
                </div>
                <div class="grid-test">
                    <div
                        v-for="n in 4"
                        :key="`${item}-${n}`"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
            </div>
        </div>
        <div>
            Использование с repeat auto-fill/auto-fit <br>
            repeat(auto-fill/auto-fit, 150px)
            justify-content: space-between;
        </div>
        <div>
            <vue-resizable
                :active="['r', 'l']"
                :min-width="200"
                height="auto"
                :style="'height: auto'"
            >
                <div class="repeat-af">
                    <div
                        v-for="n in 3"
                        :key="`rep3-${n}`"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
            </vue-resizable>
        </div>
        <div>
            <vue-resizable
                :active="['r', 'l']"
                :min-width="200"
                height="auto"
                :style="'height: auto'"
            >
                <div class="repeat-af fit">
                    <div
                        v-for="n in 3"
                        :key="`rep4-${n}`"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
            </vue-resizable>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

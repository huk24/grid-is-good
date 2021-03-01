<template>
    <div class="page">
        <h1 class="title">Minmax(first-size, second-size)</h1>
        <div>
            Возвращает наибольший из двух параметров.
        </div>
        <div>
            grid-template-columns: repeat(3, minmax(200px, 1fr));
        </div>
        <div>
            <vue-resizable
                :active="['r', 'l']"
                :min-width="100"
                height="auto"
                :style="'height: auto'"
            >
                <div class="minmax">
                    <div
                        v-for="n in 3"
                        :key="`rep2-${n}`"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
            </vue-resizable>
        </div>
        <div>
            grid-template-columns: repeat(3, minmax(0, 1fr));
        </div>
        <vue-resizable
            :active="['r', 'l']"
            :min-width="100"
            height="auto"
            :style="'height: auto'"
        >
            <div class="minmax over">
                <div class="item">asdjasjdjasjdajsdjasasdasdasdasdasd</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>
        </vue-resizable>
        <div>
            Использование с repeat auto-fill/auto-fit <br>
            repeat(auto-fill/auto-fit, minmax(200px, 1fr))
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
                        v-for="n in 5"
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
                        v-for="n in 5"
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

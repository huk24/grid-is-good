<template>
    <div class="home">
        <section class="section">
            <h1>Grid</h1>
            <div class="mb">
                Для создания grid-контейнера используется свойств:
                <span class="o">display</span>: grid | inline-grid
                <br>
                <br>
                Для задания сетки: <span class="o">grid-template-columns</span> /  <span class="o">grid-template-rows</span>
                <br>
                <br>
                Примеры:
                <br>
                <br>
                1) <span class="o">grid-template-columns</span>: 50px 2fr 1fr minmax(70px, 1fr)
                <br>
                <br>
                2) <span class="o">grid-template-rows</span>: [first-line] 40px [second-line] repeat(2,[row-start] 70px [row-end])
                <vue-resizable
                    :active="['r', 'l']"
                    :min-width="200"
                    height="auto"
                >
                    <div class="grid1">
                        <div
                            v-for="n in 7"
                            :key="'grid1-' + n"
                            class="item"
                        >
                            {{ n }}
                        </div>
                    </div>
                </vue-resizable>
                <br>
                <br>
                3) <span class="o">grid-template-columns</span>: repeat(auto-fill, minmax(150px, 1fr))
                <vue-resizable
                    :active="['r', 'l']"
                    :min-width="200"
                    height="auto"
                >
                    <div class="grid-af">
                        <div
                            v-for="n in 3"
                            :key="'gridaf-' + n"
                            class="item"
                        >
                            {{ n }}
                        </div>
                    </div>
                </vue-resizable>
                <br>
                <br>
                4) <span class="o">grid-template-columns</span>: repeat(auto-fit, minmax(150px, 1fr))
                <div class="grid-afit">
                    <div
                        v-for="n in 3"
                        :key="'gridafit-' + n"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
            </div>
        </section>
        <div>
            <span class="o">grid-template-areas:</span>
            <br>
            <span class="t">grid-template-areas:</span><span class="g">"header header header header"</span>
            <br>
            <span class="t">grid-template-areas:</span><span class="g">"zone1 . zone2 zone3"</span>;
            <br>
            <span class="o">grid-template-rows</span>: 50px 50px;
            <br>
            <span class="o">grid-template-columns</span>: repeat(4, 1fr);
            <div class="grid-areas">
                <div class="header">header</div>
                <div class="zone1">zone1</div>
                <div class="zone2">zone2</div>
                <div class="zone3">zone3</div>
            </div>
        </div>
        <div>
            <span class="o">grid-template:</span>
            <br>
            <span class="t">grid-template:</span><span class="g">"zone1 header header zone3"</span> 50px
            <br>
            <span class="t">grid-template:</span><span class="g">"zone1 . zone2 zone3"</span> 50px / 1fr 1fr 1fr 1fr;
            <div class="grid-template">
                <div class="header">header</div>
                <div class="zone1">zone1</div>
                <div class="zone2">zone2</div>
                <div class="zone3">zone3</div>
            </div>
        </div>
        <div>
            <span class="o">grid-auto-flow</span>:  row | column | dense | row dense | column dense;
            <div class="grid-flow">
                <div
                    v-for="(n, index) in flow"
                    :key="'gridaauto-' + index"
                    :style="`grid-column: span ${n}`"
                    class="item"
                >
                    {{ index }}
                </div>
            </div>
        </div>
        <div>
            <span class="o">grid-auto-rows</span> / <span class="o">grid-auto-columns</span>
            <div class="grid-auto">
                <div
                    v-for="n in 5"
                    :key="'gridaauto-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
        </div>
        <div>
            <span class="o">align-content</span> / <span class="o">justify-content</span> / <span class="o">place-content</span>
            <br>
            Значения: start,end,center,stretch,space-around, space-between, space-evenly
            <div class="grid-content">
                <div
                    v-for="n in 4"
                    :key="'gridcont-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
        </div>
        <div>
            <span class="o">align-items</span> / <span class="o">justify-items</span> / <span class="o">place-items</span>
            <br>
            Значения: start,end,center,stretch
            <div class="grid-items">
                <div
                    v-for="n in 4"
                    :key="'gridcont-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
        </div>
        <div>
            <span class="o">grid</span>: none
            <br>
            <span class="o">grid</span>: grid-template
            <br>
            <span class="o">grid</span>: grid-template-rows / [ auto-flow && dense? ] grid-auto-columns?
            <div class="grid-grid">
                <div
                    v-for="n in 10"
                    :key="'gridcont-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
            <span class="o">grid</span>: [ auto-flow && dense? ] grid-auto-rows? / grid-template-columns
            <div class="grid-grid2">
                <div
                    v-for="n in 10"
                    :key="'gridcont-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
        </div>
        <div>
            flex:
            <div class="flex-test">
                <div
                    v-for="n in 5"
                    :key="'fy-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>

            grid:
            <div class="grid-test">
                <div
                    v-for="n in 5"
                    :key="'gt-' + n"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
        </div>
        <div class="exp">
            Примеры:
            <img src="./1.png" alt>
            <img src="./2.png" alt>
            <img src="./3.png" alt>
            <img src="./4.png" alt>
            <a href="https://summit.microsoftedge.com/" target="_blank">https://summit.microsoftedge.com/</a>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

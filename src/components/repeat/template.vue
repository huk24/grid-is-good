<template>
    <div class="page">
        <h1 class="title">repeat()</h1>
        <div>
            repeat(n, [track-size]+ )
        </div>
        <div>
            grid-template-rows: repeat(2, 40px 50px);
            <br>
            grid-template-columns: 100px repeat(2, 50px);
        </div>
        <div class="example center repeat1">
            <div
                v-for="n in 12"
                :key="`rep1-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
        <div>
            grid-template-columns: repeat(auto-fill / auto-fit, 200px);
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
                        v-for="n in 12"
                        :key="`rep2-${n}`"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
            </vue-resizable>
        </div>
        <div>
            Разница между auto-fill / auto-fit
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
        <div>
            grid-template-columns: 50px repeat(auto-fill, 200px) 50px;
        </div>
        <div>
            <vue-resizable
                :active="['r', 'l']"
                :min-width="310"
                height="auto"
                :style="'height: auto'"
            >
                <div class="repeat-af with">
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
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>

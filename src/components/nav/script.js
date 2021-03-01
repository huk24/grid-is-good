import { list } from '@/router/index.js'

export default {
    name: 'fixed-nav',
    data() {
        return {
            navigations: ['', ...list].map(el => `/${el}`),
            loading: false
        }
    },
    computed: {
        current() {
            return this.navigations.findIndex( el => this.$route.path === el)
        }
    },
    methods: {
        goNext(indx) {
            if (!this.loading) {
                this.loading = true;
                const max = this.navigations.length - 1
                const next = indx < 0 ? max : (indx > max ? 0 : indx);

                this.$router.push(this.navigations[next]).finally( () => {
                    this.loading = false;
                })
            }
        }
    }
}

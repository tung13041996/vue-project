const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/image/blue-socks.png',
            href: 'https://vuejs.org/',
            inStock: true,
            inventory:0,
            details: ['50% cottons', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color:'green'},
                {id: 2235, color:'blue'}
            ]
        }
    }
})
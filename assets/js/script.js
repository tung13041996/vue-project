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
                {id: 2234, color:'black', img:'./assets/image/black-socks.png'},
                {id: 2235, color:'blue', img: './assets/image/blue-socks.png'}
            ],
            cart: 0,
            cartShow: 0
        }
    },
    methods: {
        addToCart() {
            this.cartShow = this.cart;
        },
        updateImage(variantsImage) {
            this.image = variantsImage;
        },
        increaseCart() {
            this.cart += 1;
        },
        descreaseCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    }
})
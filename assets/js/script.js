const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/image/blue-socks.png',
            href: 'https://vuejs.org/',
            inventory:0,
            details: ['50% cottons', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color:'black', img:'./assets/image/black-socks.png'},
                {id: 2235, color:'blue', img: './assets/image/blue-socks.png'}
            ],
            cart: 0,
            cartShow: 0,
            disabledButton: '',
            inStock: this.cart > 0,
        }
    },
    methods: {
        addToCart() {
            if (this.cart > 0) {this.cartShow = this.cart;}
            this.statusBtn();
        },
        updateImage(variantsImage) {
            this.image = variantsImage;
        },
        statusBtn() {
            this.inStock= this.cart > 0;
        },
        increaseCart() {
            this.cart += 1;
            this.statusBtn();
        },
        descreaseCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
            this.statusBtn();
        }
    }
})
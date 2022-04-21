const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Nike',
            selectedVariant:0,
            href: 'https://vuejs.org/',
            inventory:0,
            details: ['50% cottons', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color:'black', img:'./assets/image/black-socks.png', quantity:50},
                {id: 2235, color:'blue', img: './assets/image/blue-socks.png', quantity:0}
            ],
            cart: 0,
            cartShow: 0,
            disabledButton: '',
        }
    },
    computed: {
        title() {
            return this.brand + ' - ' + this.product
        },
        imageProperties() {
            return this.variants[this.selectedVariant].img;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    },
    methods: {
        addToCart() {
            if (this.cart > 0) {this.cartShow = this.cart;}
            this.statusBtn();
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        statusBtn() {
            return this.cart > 0;
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
        },
    }
})
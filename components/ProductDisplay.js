app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    `<div class="product-container">
        <div class="product-inner">
            <div class="product-cart">Cart({{ cartShow }})</div>
            <div class="product-image">
                <!-- <img v-bind:src="image" alt=""> -->

                <!-- shorthand -->
                <img :src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>

                <!-- If-else condition -->
                <!-- <p v-if="inStock">In stock</p>
                <p v-else>Out of Stocks</p> -->

                <!-- Show/hide -->
                <!-- <p v-show="inStock">In stock</p> -->

                <!-- if/else conditional -->
                <!-- <p v-if="inventory > 10">In stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">alots of stocks </p>
                <p v-else>Out of Stocks</p> -->
                <p  v-if="inStock">In Stock</p>
                <p  v-else>Out of Stock</p>
                <p>Shipping:{{ shipping }}</>

                <ul class="product-meterial">
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <ul class="product-color">
                    <li v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        :style="{backgroundColor:variant.color}">{{ variant.color }}</li>
                </ul>

                <!-- <a class="btn_primary" :href="href">Add To Cart</a> -->
                <!-- <div class="btn_add-to-cart btn_primary" v-on:click="addToCart">Add To Cart</div> -->
                <div class="group-button">
                    <button class="btn_number descrease"
                        @click="descreaseCart()"
                        :class="[ inStock ? '' : 'disabled-button' ]">-</button>
                    <span>{{ cart }}</span>
                    <button class="btn_number increase" @click="increaseCart()">+</button>
                </div>
                <div class="btn_add-to-cart btn_primary" @click="addToCart" :class="[ inStock ? '' : 'disabled-button' ]">Add To Cart</div>
            </div>
            
        </div>
        <review-list v-if="reviews.length" :reviews = "reviews"></review-list>
        <review-form @review-submitted = "addReview"></review-form>
    </div>`,
    data() {
        return {

            product: 'Socks',
            brand: 'Nike',
            image: './assets/image/black-socks.png',
            selectedVariant:0,
            href: 'https://vuejs.org/',
            inventory:0,
            details: ['50% cottons', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color:'black', img:'./assets/image/black-socks.png', quantity:50},
                {id: 2235, color:'blue', img: './assets/image/blue-socks.png', quantity:0}
            ],
            cartShow: 0,
            disabledButton: '',
            reviews: [],
            cart:0
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return '3$'
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
        addReview(review) {
            this.reviews.push(review);
        }
    }
})
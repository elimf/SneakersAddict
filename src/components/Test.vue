<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="text-center">
            <h2 class="section-heading text-uppercase">Nos Sneakers</h2>
            <h3 class="section-subheading text-muted">
                Voici une sélection qui pourra vous plaire 😍
            </h3>
        </div>
        <div class="col-12 col-lg-6 col-xl-10">
            <span>Choississez une catégorie:</span>
            <select
                v-model="monChoix"
                name="liste"
                @change="onChange($evenement)"
                class="form-control"
            >
                <option value="">Tout</option>
                <option value='["basketball"]'>Basketball</option>
                <option value='["lifestyle"]'>Lifestyle</option>
            </select>
        </div>
        </div>
        
        <div class="row justify-content-center mt-5">
            <div
                class="col-12 col-lg-6 col-xl-3 ps-5"
                style="margin-bottom: 100px"
                v-for="elements in sneakers"
                v-bind:key="elements.id"
            >
                <!--item 1-->
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img
                                v-bind:src="elements.grid_picture_url"
                                v-bind:alt="elements.id"
                                style="width: 100%; height: 100%"
                            />
                            <div class="superelement">
                                {{ elements.name }}
                                <p>{{ elements.retail_price_cents / 100 }}$</p>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1 class="display-5 text-uppercase">
                                {{ elements.silhouette }}
                            </h1>
                            <div
                                style="
                                    font-size: 12px;
                                    font-style: italic;
                                    color: black;
                                "
                            >
                                <span class="correct">PRICE</span> :
                                {{ elements.retail_price_cents / 100 }}$
                                <br />
                                <span class="correct">Brand</span> :
                                {{ elements.brand_name }} <br />
                                <span class="correct">Color</span> :
                                {{ elements.color }} <br />
                                <span class="correct">Etat</span> :
                                {{ elements.shoe_condition }} <br />
                                <a v-if="elements.story_html">
                                    <span class="correct">Story :</span>
                                    {{ elements.story_html }}</a
                                >
                                <br />
                                <span class="correct">Designer</span> :
                                {{ elements.designer }} <br />
                                <span v-if="elements.has_stock" class="correct">
                                    in stock
                                    <img
                                        style="width: 7%"
                                        src="../assets/img/validation.png"
                                /></span>
                                <span v-else>
                                    not in stock
                                    <img
                                        style="width: 5%"
                                        src="../assets/img/Cross_red_circle.png"
                                /></span>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-2">
                                            <span v-if="elements.Bestseller">
                                                <img
                                                    style="width: 200%"
                                                    src="../assets/img/best-seller.png"
                                            /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style="margin-top: 80px">
                    <div class="row justify-content-around">
                        <div class="col">
                            <button
                                v-on:click="say(elements.name)"
                                class="Mysuperbutton"
                            >
                                Ajouter Au Panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// /* eslint-disable no-use-before-define */
import sneakers from "../data/API.json";

export default {
    data() {
        return sneakers;
    },
    methods: {
        onChange: function () {
            let value = this.monChoix.toString(); //On y accède de n'importe où dans le framework
            console.log("value");
            return value;
        },
        say: function (message) {
            alert("Votre article : '" + message + "' est ajouté au panier.");
        },
    },
};
</script>
<style scoped>
.superelement {
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
}
.correct {
    font-size: 16px;
    font-weight: 10px;
    letter-spacing: 2px;
    text-shadow: 1px 1px;
    color: white;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
    background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
    );
    width: 400px;
    height: 400px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 110%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover -active .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    color: black;
    height: fit-content;
}

.flip-card-back {
    background: radial-gradient(
        circle,
        rgba(238, 174, 202, 1) 0%,
        rgba(148, 187, 233, 1) 100%
    );
    color: white;
    transform: rotateY(180deg);
}

.Mysuperbutton {
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border-radius: 6px;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffee66;
}
.Mysuperbutton:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
}
.Mysuperbutton:active {
    position: relative;
    top: 1px;
}
</style>

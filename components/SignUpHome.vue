<template>
    <section id="section3">
        <b-card >
            <div class="img-absolute"></div>
            <div class="row">
                <div class="col-md-6 text-center">
                    <img :src="require('~/assets/image/call-to-action.png')" id="imgSection">
                </div>
                <div class="col-md-6">
                    <br><br><br>
                    <h1 class="pt-5 white"><b>Free signup in seconds</b></h1>
                    <p class="fs-4 mb-4">Everyone can start sending packages without any hassle. Make the package delivery experience easier with SendinAja.
                    </p>
                    <a href="#" class="mr-2">
                        <img :src="require('~/assets/image/appstore-compressed.png')" width="130" alt="">
                    </a>
                    <a href="#" class="mr-2">
                        <img :src="require('~/assets/image/googleplay-compressed.png')" width="130" alt="">
                    </a>
                </div>
            </div>
        </b-card>
    </section>
</template>
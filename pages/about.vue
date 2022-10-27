<template>
    <div>
      <div class="container my-5 ">
        <section class="bg-white mt-5pt-5">
            <br><br><br>
            <h1 class="text-center mb-4 px-5">
                <b>
                    <span class="text-purple">Memberi solusi teknologi</span>
                 untuk kebutuhan supply chain yang mempermudah ekosistem bisnis Indonesia berkembang.
                </b>
            </h1>
            <h5 class="mb-5 text-center">Pengiriman untuk UMKM, Pebisnis Online, dan seluruh masyarakat Indonesia.</h5>
            <img src="https://storage.googleapis.com/tprt0ezsggqjornc7nf1wwluvgulhr/team-image.jpg" class="w100 mb-4">
            <div class="row my-5">
                <div class="col-md-6">
                    <h3 class="mb-4"><b>Our Mission</b></h3>
                    <b-card class="mb-3 p-0 border-2">
                        <div class="row">
                            <div class="col-1 py-0">
                                <img :src="require('~/assets/image/shape.svg')"  width="20">
                            </div>
                            <div class="col-10 py-0">
                                <p class="py-0 my-0 fs-6">Various sameday expedition services, cargo and others.</p>
                            </div>
                        </div>
                    </b-card>
                    <b-card class="mb-3 p-0 border-2">
                        <div class="row">
                            <div class="col-1 py-0">
                                <img :src="require('~/assets/image/shape.svg')"  width="20">
                            </div>
                            <div class="col-10 py-0">
                                <p class="py-0 my-0 fs-6">Various sameday expedition services, cargo and others.</p>
                            </div>
                        </div>
                    </b-card>
                    <b-card class="mb-3 p-0 border-2">
                        <div class="row">
                            <div class="col-1 py-0">
                                <img :src="require('~/assets/image/shape.svg')"  width="20">
                            </div>
                            <div class="col-10 py-0">
                                <p class="py-0 my-0 fs-6">Various sameday expedition services, cargo and others.</p>
                            </div>
                        </div>
                    </b-card>
                    <b-card class="mb-3 p-0 border-2">
                        <div class="row">
                            <div class="col-1 py-0">
                                <img :src="require('~/assets/image/shape.svg')"  width="20">
                            </div>
                            <div class="col-10 py-0">
                                <p class="py-0 my-0 fs-6">Various sameday expedition services, cargo and others.</p>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-md-6">
                    <p class="fs-5">
                        <span class="text-purple">KiriminAja</span> sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu Siap Solusi.
                        <br><br>
                        KiriminAja memberikan solusi untuk UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin melakukan pengiriman paket.
                        <br><br>
                        <b>KiriminAja </b>menawarkan: <br>
                        <ul>
                            <li>
                                Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
                            </li>
                            <li>
                                Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
                            </li>
                            <li>
                                Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
                            </li>
                        </ul>
                    </p>
                    <p>Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen untuk berkontribusi pada perekonomian Indonesia, dengan cara memberikan solusi serta kemudahan bagi para pebisnis online supaya bisnisnya terus berkembang.</p>
                </div>
            </div>
        </section>
        <section class="bg-white mb-3">
            <h2 class="text-center mb-4"><b>Our Teams</b></h2>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <img src="https://kiriminaja.com/assets/team/budi_isman.jpg" class="w100 radius">
                    <br><br>
                    <h5>
                        <b>Budi Isman</b>
                    </h5>
                    <p>
                        President Commisioner
                    </p>
                </div>
                <div class="col-md-4 mb-3">
                    <img src="https://kiriminaja.com/assets/team/budi_isman.jpg" class="w100 radius">
                    <br><br>
                    <h5>
                        <b>Budi Isman</b>
                    </h5>
                    <p>
                        President Commisioner
                    </p>
                </div>
                <div class="col-md-4 mb-3">
                    <img src="https://kiriminaja.com/assets/team/budi_isman.jpg" class="w100 radius">
                    <br><br>
                    <h5>
                        <b>Budi Isman</b>
                    </h5>
                    <p>
                        President Commisioner
                    </p>
                </div>
                <div class="col-md-4 mb-3">
                    <img src="https://kiriminaja.com/assets/team/budi_isman.jpg" class="w100 radius">
                    <br><br>
                    <h5>
                        <b>Budi Isman</b>
                    </h5>
                    <p>
                        President Commisioner
                    </p>
                </div>
                <div class="col-md-4 mb-3">
                    <img src="https://kiriminaja.com/assets/team/budi_isman.jpg" class="w100 radius">
                    <br><br>
                    <h5>
                        <b>Budi Isman</b>
                    </h5>
                    <p>
                        President Commisioner
                    </p>
                </div>
            </div>
        </section>
      </div>
      <div class="bg-secondary py-5 my-4">
        <section class="container py-5">
            <h1><b>Anda adalah kami selanjutnya?</b></h1>
            <p class="fs-5 mb-3">
                Jika anda memiliki passion tinggi dan menyukai tantangan. Mari berkontribusi kepada bangsa dengan membantu UMKM dan pebisnis online tumbuh.
            </p>
            <b-button pill size="lg" variant="purple">Berkarir di kiriminaja</b-button>
        </section>
      </div>
      <div class="container mt-5">
        <SignUpHome/>
      </div>
    </div>
</template>
  
  <script>
    import Vue from 'vue';
    export default Vue.extend({
      name: "about",
      data() {
          return {
             
          };
      },
  })
  </script>
  
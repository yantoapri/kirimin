<template>
    <div>
        <section class="praktisin-session pt-5 pb-3 pt-lg-8 pb-lg-5">
            <div class="container my-lg-5 px-mobile-fix">
                <div class="row">
                    <div class="col-lg-5 order-lg-1">
                        <img :src="require('~/assets/image/memory-cuate.svg')" alt="" class="img-fluid">
                    </div>
                    <div class="col-lg pe-lg-8">
                        <div class="me-lg-7">
                            <h1>Partner Ecosystem &amp; Integrations</h1>
                            <p class="lead fs-5">Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan
                                bisnis Anda lebih cerdas, lebih cepat, dan lebih kuat dari sebelumnya.</p>
                            <ul class="list-check mt-3 mb-4 pl-0">
                                <li><img :src="require('~/assets/image/shape.svg')" width="20" class="mr-2"/> Beragam pilihan expedisi &amp; Layanan</li>
                                <li><img :src="require('~/assets/image/shape.svg')" width="20" class="mr-2"/>Support Cash On Delivery</li>
                                <li><img :src="require('~/assets/image/shape.svg')" width="20" class="mr-2"> Dashboard Monitoring</li>
                                <li><img :src="require('~/assets/image/shape.svg')" width="20" class="mr-2">Diskon ongkir dan Cashback ongkir</li>
                                <li><img :src="require('~/assets/image/shape.svg')" width="20" class="mr-2">Customer Support Senin - Minggu</li>
                            </ul>
                            <div class="divider mt-4"></div>
                            <div class="mt-3 mt-lg-4">
                                <b-button pill size="lg" variant="purple">Daftar Gratis!</b-button>
                                <a href="#" class="btn btn-link btn-lg no-shadow text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                        <line x1="3" y1="6" x2="3" y2="19"></line>
                                        <line x1="12" y1="6" x2="12" y2="19"></line>
                                        <line x1="21" y1="6" x2="21" y2="19"></line>
                                    </svg>
                                    Docs
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-light py-5 my-4">
            <div class="container ">
                <div class="section-header py-lg-5 text-center">
                    <div class="col-md-11 m-auto">
                        <h1><b>Modern Rest API's, Simply Delivered</b></h1>
                        <p class="fs-5 px-5">Kami menggunakan teknologi REST API terbaru yang lebih mudah dimengerti oleh developer ber skala kecil</p>
                    </div>
                </div>
                <div class="my-4 mb-6">
                    <div class="row g-3">
                        <div class="col-lg-3">
                            <div class="card card-body mb-3">
                                <div>
                                    <div class="d-inline-flex p-2 text-white  full-radius bg-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path><polyline points="13 14 11 18 14 18 12 22"></polyline></svg>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <h5 class="card-title">Ongkos Kirim Up to Date</h5>
                                    <p class="card-text">Ongkos kirim langsung dari ekspedisi, tanpa perubahan</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card card-body mb-3">
                                <div>
                                    <div class="d-inline-flex p-2 text-white   full-radius bg-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6"></path><path d="M18 4l3 3l-3 3"></path><path d="M3 7h5l7 10h6"></path><path d="M18 20l3 -3l-3 -3"></path></svg>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <h5 class="card-title">Pickup &amp; Dropoff</h5>
                                    <p class="card-text">Tentukan dan pilih opsi pengiriman dropoff dan pickup</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card card-body mb-3">
                                <div>
                                    <div class="d-inline-flex p-2 text-white   full-radius bg-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="4.5" cy="9.5" r="1"></circle><circle cx="9.5" cy="4.5" r="1"></circle><circle cx="9.5" cy="14.5" r="1"></circle><circle cx="4.5" cy="19.5" r="1"></circle><circle cx="14.5" cy="9.5" r="1"></circle><circle cx="19.5" cy="4.5" r="1"></circle><circle cx="14.5" cy="19.5" r="1"></circle><circle cx="19.5" cy="14.5" r="1"></circle></svg>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <h5 class="card-title">AWB Terpusat</h5>
                                    <p class="card-text">Gak perlu pusing menunggu dapet AWB, kami yang antrikan</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card card-body mb-3">
                                <div>
                                    <div class="d-inline-flex p-2 text-white   full-radius bg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="18" r="2"></circle><circle cx="7" cy="6" r="2"></circle><circle cx="17" cy="6" r="2"></circle><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path><line x1="12" y1="12" x2="12" y2="16"></line></svg>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <h5 class="card-title">Tracking Satu Pintu</h5>
                                    <p class="card-text">Hasil ekspedisi kami buat dengan satu konsep penyajian</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card card-body mb-3">
                                <div>
                                    <div class="d-inline-flex p-2 text-white   full-radius bg-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <h5 class="card-title">Jangkauan Terluas</h5>
                                    <p class="card-text">Selalu terbuka untuk seluruh area origin dan destinasi</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 text-lg-center flower">
            <div class="container my-5 py-5">
                <div class="row mb-5">
                    <div class="col-md-7 mx-auto">
                        <h1><b>Dipercayai oleh</b></h1>
                        <p class="lead fs-5">KirimiAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia</p>
                    </div>
                </div>
                <div class="col-md-12 mt-6">
                    <div class="mb-5">
                        <div class="row g-lg-5 justify-content-center">
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                            <div class="col-md-2 mx-2 mb-5">
                                <img :src="require('~/assets/image/client-arcelle-2.png')" class='w100'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 text-lg-center bg-light flower">
            <div class="container my-5 py-5">
                <div class="row mb-5">
                    <div class="col-lg-7 mx-auto">
                        <h1 class="">Kurir Terhubung</h1>
                        <p class="lead fs-5">
                            KiriminAJA selalu terhubung dengan expedisi yang terbaik di Indonesia, dan akan terus bertambah lagi
                        </p>
                    </div>
                </div>
                <div class=" mt-6">
                    <div class="mb-5">
                        <div class="row justify-content-center">
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                <div class="col-md-3 mb-5">
                                    <img :src="require('~/assets/image/anteraja.png')" class='w100'/>
                                </div>
                                
                                                                                                                                                                                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 pricing-section mb-5">
            <div class="container px-mobile-fix">
                <div class="section-header py-lg-5 text-lg-center">
                    <div class="mx-lg-8">
                        <h2 class="font-weight-bolder">Tanpa Biaya Apapun</h2>
                        <p class="lead">Sebuah solusi optimal sehingga Anda tidak perlu pusing lagi memikirkan biaya berlangganan API</p>
                    </div>
                </div>
                <div class="row mt-3 justify-content-center">
                    <div class="col-lg-4">
                        <div class="card selected px-2">
                            <div class="card-header border-0 bg-transparent text-center position-relative">
                                <div class="mb-4 text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
                                    </svg>
                                    <h4 class="h4">Freemium</h4>
                                </div>
                                <a class="btn btn-warning text-white border-2 full-radius" href="https://wa.me/6285975255552" target="_blank">Hubungi Kami</a>
                                <div class="position-absolute mt-4 annualy pb-4 px-4 pt-4">
                                    <div>Solusi tepat untuk pertumbuhan bisnis yang signifikan</div>
                                </div>
                            </div>
                            <div class="card-body border-top  px-5">
                                <small>Integration includes</small>
                                <ul class="my-2 p-0">
                                    <li>Cashback Ongkir Up 25%</li>
                                    <li>Unlimited API call per harinya</li>
                                    <li>Pengiriman cod, reguler, next day, dan instant</li>
                                    <li>Dukungan penuh via email dan sosial media</li>
                                    <li>Pembuatan label pengiriman otomatis</li>
                                    <li>Laporan order pengiriman</li>
                                </ul>
                                <a class="btn btn-warning text-white border-2 w-100 mt-2 full-radius" href="https://wa.me/6285975255552" target="_blank">Ajukan Sekarang</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
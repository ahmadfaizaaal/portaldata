<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Portal Data DJBK</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="site.webmanifest">
    <link rel="shortcut icon" type="image/x-icon" href="<?= BASE_THEME; ?>img/portal-icon.png">

    <!-- CSS here -->
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/slicknav.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/flaticon.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/progressbar_barfiller.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/gijgo.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/animate.min.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/animated-headline.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/magnific-popup.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/themify-icons.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/slick.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/nice-select.css">
    <link rel="stylesheet" href="<?= BASE_THEME; ?>landing/assets/css/style.css">

    <link rel="stylesheet" href="<?= BASE_THEME; ?>mazer/assets/vendors/apexcharts/apexcharts.css">

    <script src="https://kit.fontawesome.com/ab0cd48a50.js" crossorigin="anonymous"></script>
    <script src="<?= BASE_THEME; ?>v4/vendor/jquery/jquery.min.js"></script>
    <script src="https://code.highcharts.com/maps/highmaps.js"></script>
    <script src="https://code.highcharts.com/maps/modules/map.js"></script>
    <!-- <script src="<?= BASE_THEME; ?>highchart/highcharts-more.js"></script>
    <script src="<?= BASE_THEME; ?>highchart/highmaps.js"></script> -->
</head>

<body>
    <!-- ? Preloader Start -->
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="<?= BASE_THEME; ?>img/portal-icon.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Preloader Start -->
    <header>
        <!-- Header Start -->
        <div class="header-area header-transparent">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper d-flex align-items-center justify-content-between">
                        <!-- Logo -->
                        <div class="logo">
                            <a href="<?= BASE_URL ?>"><img src="<?= BASE_THEME; ?>img/portal-logo.png" width="120%" alt=""></a>
                        </div>
                        <!-- Main-menu -->
                        <div class="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li><a href="<?= BASE_URL ?>">Beranda</a></li>
                                    <?php for ($i = 0; $i < count($listMenu); $i++) { ?>
                                        <li><a href="javascript:void(0)" class="menu-hover"><?= $listMenu[$i]->title; ?> &nbsp;<span class="fa fa-solid fa-angle-down fa-xs"></span></a>
                                            <ul class="submenu">
                                                <?php for ($j = 0; $j < count($listSubmenu[$i]['child_menu']); $j++) { ?>
                                                    <li><a href="<?= BASE_URL . $listSubmenu[$i]['child_menu'][$j]->url ?>"><?= $listSubmenu[$i]['child_menu'][$j]->title; ?></a>
                                                        <?php
                                                        if ($j != (count($listSubmenu[$i]['child_menu']) - 1)) {
                                                            echo '<hr class="mt-1 mb-1" style="width: 320px;">';
                                                        }
                                                        ?>
                                                    </li>
                                                    <!-- <li><a href="directory_details.html">SBU Masa Reguler</a>
                                                        <hr class="mt-1 mb-1" style="width: 320px;">
                                                    </li>
                                                    <li><a href="listing.html">BUJK (Masa Transisi)</a>
                                                        <hr class="mt-1 mb-1" style="width: 320px;">
                                                    </li>
                                                    <li><a href="listing.html">BUJK (Masa Reguler)</a>
                                                        <hr class="mt-1 mb-1" style="width: 320px;">
                                                    </li>
                                                    <li><a href="listing.html">Pengalaman Main BUJK</a>
                                                        <hr class="mt-1 mb-1" style="width: 320px;">
                                                    </li>
                                                    <li><a href="listing.html">Pengalaman Sub BUJK</a>
                                                    </li> -->
                                                <?php } ?>
                                            </ul>
                                        </li>
                                    <?php } ?>
                                    <!-- <li><a href="#" class="menu-hover">Tenaga Kerja Konstruksi &nbsp;<span class="fa fa-solid fa-angle-down fa-xs"></span></a>
                                        <ul class="submenu">
                                            <li><a href="directory_details.html">Sertifikat Keahlian (SKA) Masa Transisi</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="listing.html">Sertifikat Keterampilan Kerja (SKTK) Masa Transisi</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="listing.html">Sertifikat Kompetensi Kerja (SKK) Masa Reguler</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="listing.html">Tenaga Ahli (SKA Masa Transisi)</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="listing.html">Tenaga Terampil (SKTK Masa Transisi)</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="listing.html">Tenaga Kerja Konstruksi (SKK Masa Reguler)</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="listing.html">Pengalaman Profesi</a>

                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="menu-hover">Pembinaan Jasa Konstruksi &nbsp;<span class="fa fa-solid fa-angle-down fa-xs"></span></a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">Peserta Pembinaan DJBK (Dayanaker)</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="blog_details.html">Pelatihan Pembinaan DJBK (Dayanaker)</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="elements.html">Peserta Distance Learning Bidang Konstruksi (SIBIMA)</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="elements.html">Pelatihan Distance Learning Bidang Konstruksi (SIBIMA)</a>

                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="menu-hover">Laporan Tahunan Asing &nbsp;<span class="fa fa-solid fa-angle-down fa-xs"></span></a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">BUJKA berdasarkan Laporan Tahunan</a>
                                                <hr class="mt-1 mb-1" style="width: 320px;">
                                            </li>
                                            <li><a href="blog_details.html">Proyek Asing berdasarkan Laporan Tahunan</a>

                                            </li>
                                        </ul>
                                    </li> -->
                                </ul>
                            </nav>
                        </div>
                        <!-- Header-btn -->
                        <div class="header-btns d-none d-lg-block f-right">
                            <!-- <a href="#" class="mr-40"><i class="ti-user"></i> Log in</a> -->
                            <a href="<?= WEBAPI_URL ?>/auth?r=portal-data" class="btn btn-xs">Masuk</a>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
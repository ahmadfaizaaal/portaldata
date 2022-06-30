<?php
defined('BASEPATH') or exit('No direct script access allowed');

class TenagaKerja extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');
        $this->endpoints  = $this->config->item('endpoints');
        $this->apikey     = $this->config->item('apikeys');
    }

    public function index()
    {
        $this->load->view('component/header');
        $this->load->view('home/landing2');
        $this->load->view('component/footer');
    }

    public function skaTransisi($type = null)
    {
        $pageTitle = 'Sertifikat Keahlian (SKA) Masa Transisi';

        if ($type == "ajax") {
            $context   = "/tenaga-kerja-konstruksi/ska-transisi";
            $data      = http_request($this->endpoints['default'] . '/' . $this->apikey['default'] . $context);
            echo json_encode($data, true);
        } else {
            loadPage('tenaga_kerja', 'ska_transisi', $pageTitle);
        }
    }

    public function ahli($type = null)
    {
        $pageTitle = 'Tenaga Ahli (SKA Masa Transisi)';

        if ($type == "ajax") {
            $context   = "/tenaga-kerja-konstruksi/tenaga-ahli-transisi";
            $data      = http_request($this->endpoints['default'] . '/' . $this->apikey['default'] . $context);
            echo json_encode($data, true);
        } else {
            loadPage('tenaga_kerja', 'tenaga_ahli', $pageTitle);
        }
    }
}

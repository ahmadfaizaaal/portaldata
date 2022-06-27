<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Bujk extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');
        // $this->load->model('M_GeneralSetting', 'genset');
		$this->endpoints  = $this->config->item('endpoints');
		$this->apikey     = $this->config->item('apikeys');
    }

    public function index()
    {
        $this->load->view('component/header');
        $this->load->view('home/landing2');
        $this->load->view('component/footer');
    }

    public function sbuTransisi($type = null)
    {
        $pageTitle = 'Sertifikat Badan Usaha (SBU) Masa Transisi';

		if ($type == "ajax") {
			$context   = "/badan-usaha/sbu-transisi";
			$data      = http_request($this->endpoints['default'] . '/' . $this->apikey['default'] . $context);
			echo json_encode($data, true);
		} else {
			loadPage('bujk', 'sbu_transisi_dev', $pageTitle);
		}

    }
}

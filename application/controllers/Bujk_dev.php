<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Bujk_dev extends CI_Controller
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
		// $context   = "/badan-usaha/sbu-transisi";
		// $data      = http_request($this->endpoints['default'] . '/' . $this->apikey['default'] . $context);

		if ($type == "ajax") {
			$context   = "/badan-usaha/sbu-transisi";
			$data      = http_request($this->endpoints['default'] . '/' . $this->apikey['default'] . $context);
			echo json_encode($data, true);
		} else {
			loadPage('bujk', 'sbu_transisi_dev', $pageTitle);
		}

    }

    // public function sbuReguler()
    // {
    //     $pageTitle = 'Sertifikat Badan Usaha (SBU) Masa Reguler';
    //     $url =  '/' . $this->uri->uri_string();
    //     $menu = $this->genset->getMenu($url);

    //     $data['displayListSubmenu'] = $this->genset->getListSubMenu($menu->id_menu);

    //     loadPage('bujk', 'sbu_reguler', $pageTitle, $data, $menu->id_menu);
    // }

}
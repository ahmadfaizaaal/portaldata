<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Bujk extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');
        // $this->load->model('M_GeneralSetting', 'genset');
    }

    public function index()
    {
        $this->load->view('component/header');
        $this->load->view('home/landing2');
        $this->load->view('component/footer');
    }

    public function sbuTransisi()
    {
        $pageTitle = 'Sertifikat Badan Usaha (SBU) Masa Transisi';
        $url =  '/' . $this->uri->uri_string();
        $menu = $this->genset->getMenu($url);

        $data['displayListSubmenu'] = $this->genset->getListSubMenu($menu->id_menu);

        loadPage('bujk', 'sbu_transisi', $pageTitle, $data, $menu->id_menu);
    }

    public function ajax_sbu_transisi()
    {
        $columnIndex = ['id_jenis', 'jenis_usaha_bu', 'detail_jenis_usaha', 'jml_sertif'];

        $start     = $this->input->get('start');
        $length    = $this->input->get('length');
        $page      = ($start / $length) + 1;
        $order     = $this->input->get('order');
        $orderCol  = $columnIndex[$order[0]['column']];
        $orderDir  = $order[0]['dir'];
        $search    = $this->input->get('search');
        $searchVal = $search['value'];
        $searchCol = null;
        if ($this->input->get('columns')) {
            foreach ($this->input->get('columns') as $key => $item) {
                if ($item['data'] == "session_id") {
                    if ($item['search']['value'] != '') {
                        $column = $item['data'];
                        $value = ($item['search']['value']) ? "online" : "offline";
                        $searchCol .= "searchCol=$column&searchColVal=$value&";
                    }
                } else {
                    if ($item['search']['value']) {
                        $column = $item['data'];
                        $value  = $item['search']['value'];

                        $searchCol .= "searchCol=$column&searchColVal=$value&";
                    }
                }
            }
            $searchCol = rtrim($searchCol, "&");
        }

        // var_dump($this->input->get());
        // var_dump($page);

        $rawData   = $this->sbutransisi->getSbuTransisi($page, $length, $orderCol, $orderDir, $searchVal, $searchCol);

        $data = $rawData;
        $data['draw'] = $this->input->get('draw');
        $data['recordsTotal'] = $rawData['contents']->data->jenisUsaha->count ?? 0;
        $data['recordsFiltered'] = $rawData['contents']->data->jenisUsaha->count ?? 0;
        $data['data'] = $rawData['contents']->data->jenisUsaha->rows ?? [];

        echo json_encode($data);
    }

    public function sbuReguler()
    {
        $pageTitle = 'Sertifikat Badan Usaha (SBU) Masa Reguler';
        $url =  '/' . $this->uri->uri_string();
        $menu = $this->genset->getMenu($url);

        $data['displayListSubmenu'] = $this->genset->getListSubMenu($menu->id_menu);

        loadPage('bujk', 'sbu_reguler', $pageTitle, $data, $menu->id_menu);
    }

    public function registration($type)
    {
        if (!$this->session->userdata('nik')) {
            redirect('auth/login/' . $type);
        }

        $data['title'] = "Sistem Manajemen Layanan Pernikahan";
        $data['type'] = $type;
        $data['job'] = 'User';
        $data['question'] = $this->registration->getListQuestion($type);
        $dataNIK = $this->auth->getDataByNIK($this->session->userdata('nik'));
        $data['participant'] = json_encode($dataNIK);
        $result = $this->registration->getListAkad();
        $listAkad = array();
        foreach ($result as $val) {
            array_push($listAkad, date_format(date_create($val->TGL_AKAD), "Y-m-d H"));
        }
        $data['listDateAkad'] = $listAkad;
        $result = $this->registration->getDisabledHours();
        $listTimeAkad = array();
        foreach ($result as $val) {
            array_push($listTimeAkad, intval(substr($val->TGL_AKAD, 11, 2)));
        }
        $data['listTimeAkad'] = $listTimeAkad;

        $where = '';
        $gender = '';
        if ('Laki-laki' == $dataNIK->JENIS_KELAMIN) {
            $gender = 'S';
        } else {
            $gender = 'I';
        }
        if ('nikah' == $type) {
            $where = 'rd.NIK_CAL_' . $gender;
        } else {
            $where = 'rd.NIK_' . $gender;
        }

        $statusKawin = $this->registration->checkAuthorityRegistration($this->session->userdata('nik'));
        if (null != $statusKawin) {
            $onGoing = $this->registration->checkOnGoingRegistration($this->session->userdata('nik'), $where);
            if (null != $onGoing) {
                $this->session->set_flashdata(
                    'message',
                    '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Perhatian!</strong> Anda sudah melakukan pendaftaran, harap tunggu info selanjutnya!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>'
                );
                redirect('home');
            } else {
                if (('Menikah' == $statusKawin || 'Kawin' == $statusKawin) && $dataNIK->JENIS_KELAMIN == 'Perempuan') {
                    $this->session->set_flashdata(
                        'message',
                        '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Gagal!</strong> Status perkawinan anda di dukcapil adalah bersuami!
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>'
                    );
                    redirect('home');
                } else {
                    $this->load->view('registration/' . $type, $data);
                }
            }
        } else {
            $this->load->view('registration/' . $type, $data);
        }
    }

    public function listJob()
    {
        $job = $this->registration->getListJob();
        echo json_encode($job);
    }

    // public function test()
    // {
    //     $data['title'] = "Sistem Manajemen Layanan Pernikahan";
    //     $this->load->view('registration/test', $data);
    // }

    // public function picker()
    // {
    //     $this->load->view('registration/datetime');
    // }
}

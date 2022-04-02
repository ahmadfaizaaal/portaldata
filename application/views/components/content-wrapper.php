<?php


$page_path ? $this->load->view($menu . '/' . $page_path) : $this->load->view('components/maintenance-page');

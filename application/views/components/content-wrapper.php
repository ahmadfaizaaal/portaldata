<?php


$pagePath ? $this->load->view($menu . '/' . $pagePath) : $this->load->view('components/maintenance-page');

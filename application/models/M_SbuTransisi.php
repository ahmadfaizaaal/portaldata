<?php

use GuzzleHttp\Client;

defined('BASEPATH') or exit('No direct script access allowed');

class M_SbuTransisi extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');

        $this->endpoints  = $this->config->item('endpoints');
		$this->apikey     = $this->config->item('apikeys');
		$this->rest       = new Client();
    }

    public function getSbuTransisi($page = null, $pageSize = null, $orderCol = null, $orderDir = null, $search = null, $searchByCol = null)
	{
			
		try {

			$url                  = $this->endpoints['default'] . "/".$this->apikey['default'] . "/badan-usaha/sbu-transisi?" . (!is_null($page) ? "page=$page&" : '') . ($pageSize ? "pageSize=$pageSize&" : '') . ($orderCol ? "orderCol=$orderCol&" : '') . ($orderDir ? "orderDir=$orderDir&" : '') . ($search ? "search=$search&" : '') . ($searchByCol ? $searchByCol : '');
			// var_dump($url);
			$response             = $this->rest->get($url);
			$responseBody         = $response->getBody();
			$responseStatusCode   = $response->getStatusCode();
			$responseReasonPhrase = $response->getReasonPhrase();
			$responseContents     = $responseBody->getContents();

			return [
				'status'   => $responseStatusCode,
				'messages' => $responseReasonPhrase,
				'contents' => json_decode($responseContents)
			];
			
		} catch (GuzzleHttp\Exception\BadResponseException $e) {
			$response = $e->getResponse();
			return [
				'status'   => $response->getStatusCode(),
				'messages' => $response->getReasonPhrase(),
				'contents' => json_decode($response->getBody()->getContents())
			];
		}
	}
}

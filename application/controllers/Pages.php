<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

          public function __construct()
        {
                parent::__construct();
                $this->load->model('page_model');
                $this->load->helper('url_helper');
                 $this->load->helper('form');
    $this->load->library('form_validation');
        }
        public function view($page = 'home')
{
        if ( ! file_exists(APPPATH.'views/pages/'.$page.'.php'))
        {
                // Whoops, we don't have a page for that!
                show_404();
        }
        

        $data['title'] = ucfirst($page); // Capitalize the first letter
        $data['page_item'] = $this->page_model->get_page($page);
        
        $this->load->view('templates/header', $data);
        $this->load->view('pages/'.$page, $data);
        $this->load->view('templates/footer', $data);
}

public function searchuser()
{
   

    $data['title'] = 'Create a news item';

    $this->form_validation->set_rules('title', 'Title', 'required');
    $this->form_validation->set_rules('text', 'Text', 'required');

    if ($this->form_validation->run() === FALSE)
    {
        $this->load->view('templates/header', $data);
        $this->load->view('news/create');
        $this->load->view('templates/footer');

    }
    else
    {
        $this->news_model->set_news();
        $this->load->view('news/success');
    }
}

}
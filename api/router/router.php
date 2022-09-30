<?php
    class Router
    {
        private $action;
        private $data;
        private $Controller;

        function __construct()
        {
            $this->Controller = new Controller();
        }
        private function executeAction($action)
        {
            $this->Controller->$action($this->data);
        }
        public function selectAction($request_method)
        {
            $this->data = json_decode(file_get_contents("php://input"));
            $this->action = strtolower($request_method);

            $this->executeAction($this->action);
        }
    }
?>
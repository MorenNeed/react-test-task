<?php
    class ActionsRouter
    {
        private $action;
        private $data;
        private $actionObject;

        function __construct()
        {
            $this->actionObject = new Action();
        }
        private function executeAction($action)
        {
            $this->actionObject->$action($this->data);
        }
        public function selectAction()
        {
            $this->data = json_decode(file_get_contents("php://input"));
            $this->action = $this->data->action;

            $this->executeAction($this->action);
        }
    }
?>
<?php
    class Database
    {
        private $host = "localhost";
        private $db_name = "id19487752_db_test"; // "id19487752_db_test";
        private $username = "id19487752_morenneed"; // "id19487752_morenneed";
        private $password = "Y)-_uPucikyH3dld";
        public $conn;

        public function getConnection()
        {
            $this->conn = null;

            $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->db_name, 3306);

            if(!$this->conn)
            {
                die("Could not connect to server!");
            }
            return $this->conn;
        }
    }
?>
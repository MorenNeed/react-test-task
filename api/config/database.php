<?php
class Database
{
    private $host = "localhost";
    private $db_name = "id19487752_db_test";
    private $username = "id19487752_morenneed";
    private $password = "MdbOWN)yF*3tI/g=";
    public $conn;

    public function getConnection()
    {
        $this->conn = null;

        $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->db_name, 3306);

        if(!$this->conn)
        {
            die("could not connect to server!");
        }
        return $this->conn;
    }
}
?>
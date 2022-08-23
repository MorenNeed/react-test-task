<?php
include_once "/Users/Alex/source/repos/react-test-task/api/config/database.php";

abstract class Product
{
    protected $conn;

    public $sku;
    public $name;
    public $price;

    abstract protected function add();
    public function read()
    {
        $query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/read.sql');

        $stmt = mysqli_query($this->conn, $query);

        return $stmt;
    }
    public function delete()
    {
        $query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/delete.sql');

        $stmt = $this->conn->prepare($query);

        $this->sku = htmlspecialchars(strip_tags($this->sku));

        $stmt->bind_param('s', $this->sku);

        if ($stmt->execute())
        {
            return true;
        }

        return false;
    }

    public function __construct($db)
    {
        $this->conn = $db;
    }
}
?>
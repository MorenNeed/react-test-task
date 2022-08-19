<?php
abstract class Product
{
    protected $conn;
    protected $table_name = "products";

    protected $SKU;
    protected $name;
    protected $price;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    function read()
    {
        $query = "";
    }
}
?>
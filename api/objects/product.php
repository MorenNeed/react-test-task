<?php
abstract class Product
{
    protected $conn;

    protected $sku;
    protected $name;
    protected $price;

    abstract protected function add();
    public function read()
    {
        $commandFile = fopen("/api/database/read.sql", "r") or die("Unable to open file!");
        $query = fread($commandFile, filesize("/api/database/read.sql"));
        fclose($commandFile);

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
    public function delete()
    {
        $commandFile = fopen("/api/database/delete.sql", "r") or die("Unable to open file!");
        $query = fread($commandFile, filesize("/api/database/delete.sql"));
        fclose($commandFile);

        $stmt = $this->conn->prepare($query);

        $this->sku = htmlspecialchars(strip_tags($this->sku));

        $stmt->bindParam(':sku',$this->sku);

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
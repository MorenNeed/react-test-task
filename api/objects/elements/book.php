<?php
include './api/objects/product.php';

class Book extends Product
{
    private $weight;

    public function add()
    {
        $commandFile = fopen("/api/database/read.sql", "r") or die("Unable to open file!");
        $query = fread($commandFile, filesize("/api/database/read.sql"));
        fclose($commandFile);

        $stmt = $this->conn->prepare($query);

        $this->sku=htmlspecialchars(strip_tags($this->sku));
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->weight=htmlspecialchars(strip_tags($this->weight));

        $stmt->bindParam(':sku',$this->sku);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':description', $this->weight);


        if ($stmt->execute())
        {
            return true;
        }
        return false;
    }
}

?>
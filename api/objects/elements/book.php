<?php
include_once '/Users/Alex/source/repos/react-test-task/api/objects/product.php';

class Book extends Product
{
    private $weight;

    public function add()
    {
        $query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/add.sql');

        $stmt = $this->conn->prepare($query);

        $this->sku=htmlspecialchars(strip_tags($this->sku));
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->weight=htmlspecialchars(strip_tags($this->weight));

        $stmt->bind_param('ssds', $this->sku, $this->name, $this->price, $this->weight);


        if ($stmt->execute())
        {
            return true;
        }
        return false;
    }
}

?>
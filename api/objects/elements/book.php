<?php
class Book extends Product
{
    private $weight;

    public function add()
    {
        return $this->set($this->sku, $this->name, $this->price, $this->weight);
    }
    public function setData($sku, $name, $price, $description)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->weight = $description;
    }
}

?>
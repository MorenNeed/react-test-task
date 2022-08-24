<?php
abstract class Product extends Validator
{
    protected $sku;
    protected $name;
    protected $price;

    abstract protected function add();
    abstract protected function setData($sku, $name, $price, $description);
    public function read()
    {
        return $this->get();
    }
    public function remove()
    {
        return $this->delete($this->sku);
    }
    public function setDeleteData($sku)
    {
        $this->sku = $sku;
    }
}
?>
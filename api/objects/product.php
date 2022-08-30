<?php
abstract class Product extends Validator
{
    protected $sku;
    protected $name;
    protected $price;
    private $stmt;
    private $numOfProducts;
    private $products_arr;

    abstract protected function add();
    abstract protected function setData($sku, $name, $price, $description);
    public function read()
    {
        $this->stmt = $this->get();
        $this->numOfProducts = mysqli_num_rows($this->stmt);
        if($this->numOfProducts>0)
        {
            $this->products_arr = array();
            $this->products_arr["records"] = array();

            while($row = mysqli_fetch_assoc($this->stmt))
            {
                extract($row);

                $product_item = array(
                    "sku" => $sku,
                    "name" => $name,
                    "price" => $price,
                    "description" => $description
                );

                array_push($this->products_arr["records"], $product_item);

            }

            return $this->products_arr;
        }
        else
        {
            return false;
        }
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
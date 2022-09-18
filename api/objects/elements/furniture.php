<?php
    class Furniture extends Product
    {
        private $dimensions;

        public function add()
        {
            return $this->set($this->sku, $this->name, $this->price, $this->dimensions);
        }
        public function setData($sku, $name, $price, $description)
        {
            $this->sku = $sku;
            $this->name = $name;
            $this->price = $price;
            $this->dimensions = "Dimensions: " . $description->height . 'x' . $description->width . 'x' . $description->length . ' (CM)';
        }
    }
?>
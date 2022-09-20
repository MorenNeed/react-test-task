<?php
    class DVD extends Product
    {
        private $size;

        public function add()
        {
            return $this->set($this->sku, $this->name, $this->price, $this->size);
        }
        public function setData($sku, $name, $price, $description)
        {
            $this->sku = $sku;
            $this->name = $name;
            $this->price = $price;
            $this->size = "Size: " . $description->size . ' (MB)';
        }
    }
?>
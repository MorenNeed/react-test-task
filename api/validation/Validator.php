<?php
class Validator extends DBCommands
{
    private $message = array();
    public function validate_sku($sku)
    {
        if($this->compare($sku) === true)
        {
            array_push($this->message, "That SKU already exists!");
            return $this->message;
        }
        else if(strlen($sku) <= 0)
        {
            array_push($this->message, "SKU has no data!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validate_name($name)
    {
        if(!(strlen($name) > 0))
        {
            array_push($this->message, "Name has no data!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validate_price($price)
    {
        if(!(strlen($price) > 0))
        {
            array_push($this->message, "Price has no data!");
            return $this->message;
        }
        if(!(filter_var($price,FILTER_VALIDATE_FLOAT)))
        {
            array_push($this->message, "Price is not valid data!");
            return $this->message;
        }
        if(!(floatval($price) > 0))
        {
            array_push($this->message, "Price is below or equal zero!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validate_description($description)
    {
        if($description === null)
        {
            array_push($this->message, "Select type of product!");
        }
        else if((strlen($description) <= 0))
        {
            array_push($this->message, '');
            array_push($this->message, "Description has no data!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function getMessage()
    {
        return $this->message;
    }
}
?>
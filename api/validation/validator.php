<?php
class Validator extends DbCommands
{
    private $message = array();
    public function validateSkuDelete($sku)
    {
        if(strlen($sku) <= 0)
        {
            array_push($this->message, "Select data to delete!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validateSKU($sku)
    {
        if(strlen($sku) <= 0)
        {
            array_push($this->message, "Please, submit SKU!");
            return $this->message;
        }
        else if($this->compare($sku))
        {
            array_push($this->message, "That SKU already exists!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validateName($name)
    {
        if(!(strlen($name) > 0))
        {
            array_push($this->message, "Please, submit Name!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validatePrice($price)
    {
        if(!(strlen($price) > 0))
        {
            array_push($this->message, "Please, submit Price!");
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
    public function validateType($type)
    {
        if($type === null)
        {
            array_push($this->message, "Select type of product!");
            return $this->message;
        }
        array_push($this->message, "");
        return $this->message;
    }
    public function validateDescription($description)
    {
        foreach((array_values((array)$description)) as $value)
        {
            if($value === '')
            {
                array_push($this->message, "Please, submit Description!");
                return $this->message;
            }
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
<?php
    class Controller
    {
        private $validator;
        private $element;
        private $stmt;

        function __construct()
        {
            $this->validator = new Validator();
        }
        public function post($data)
        {
            if(
                $this->validator->validateSKU($data->sku) === array('') &
                $this->validator->validateName($data->name) === array('','') &
                $this->validator->validatePrice($data->price) === array('','','') &
                $this->validator->validateType($data->type) === array('','','','') &
                $this->validator->validateDescription($data->description) === array('','','','','')
            )
            {
                $this->element = new $data->type;
                $this->element->setData($data->sku, $data->name, $data->price, $data->description);

                if($this->element->add())
                {
                    http_response_code(201);

                    echo json_encode(array("message" => "Product created!"), JSON_UNESCAPED_UNICODE);
                }
                else
                {
                    http_response_code(503);

                    echo json_encode(array("message" => "Can`t create!"), JSON_UNESCAPED_UNICODE);
                }
            }
            else
            {
                http_response_code(400);

                echo json_encode($this->validator->getMessage(), JSON_UNESCAPED_UNICODE);
            }
        }
        public function delete($data)
        {
            if
            (
                $this->validator->validateSkuDelete($data->sku) === array('')
            )
            {
                $this->element = new Book();

                $this->element->setDeleteData($data->sku);

                if($this->element->remove())
                {
                    http_response_code(200);

                    echo json_encode(array("message" => "Product deleted!"), JSON_UNESCAPED_UNICODE);
                }
                else
                {
                    http_response_code(503);

                    echo json_encode(array("message" => "Can`t delete file!"));
                }
            }
            else
            {
                http_response_code(400);

                echo json_encode($this->validator->getMessage(), JSON_UNESCAPED_UNICODE);
            }
        }
        public function get()
        {
            $this->element = new Book();

            $this->stmt = $this->element->read();

            if($this->stmt != false)
            {
                http_response_code(200);

                echo json_encode($this->stmt);
            }
            else
            {
                http_response_code(404);

                json_encode(array("message" => "No products!"), JSON_UNESCAPED_UNICODE);
            }
        }
    }
?>
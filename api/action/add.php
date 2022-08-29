<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require(dirname(__DIR__). DIRECTORY_SEPARATOR  .'autoload.php');

$data = json_decode(file_get_contents("php://input"));

$validator = new Validator();

if(
    $validator->validateSKU($data->sku) === array('') &
    $validator->validateName($data->name) === array('','') &
    $validator->validatePrice($data->price) === array('','','') &
    $validator->validateType($data->type) === array('','','','') &
    $validator->validateDescription($data->description) === array('','','','','')
)
{
    (string)$type = $data->type;
    $element = new $type();
    $element->setData($data->sku, $data->name, $data->price, $data->description);

    if($element->add())
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
    echo json_encode($validator->getMessage(), JSON_UNESCAPED_UNICODE);
}
?>
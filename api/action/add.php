<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require '/Users/Alex/source/repos/react-test-task/api/autoload.php';

$data = json_decode(file_get_contents("php://input"));

$validator = new Validator();

if(
    $validator->validate_sku($data->sku) === array('') &
    $validator->validate_name($data->name) === array('','') &
    $validator->validate_price($data->price) === array('','','') &
    $validator->validate_description($data->description) === array('','','','')
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
    echo json_encode($validator->getMessage(), JSON_UNESCAPED_UNICODE);
}
?>
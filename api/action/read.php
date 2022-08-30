<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require(dirname(__DIR__). DIRECTORY_SEPARATOR  .'autoload.php');


$element = new Book();

$stmt = $element->read();

if($stmt != false)
{
    http_response_code(200);

    echo json_encode($stmt);
}
else
{
    http_response_code(404);

    json_encode(array("message" => "No products!"), JSON_UNESCAPED_UNICODE);
}
?>
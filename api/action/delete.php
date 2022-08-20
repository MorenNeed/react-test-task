<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once "../config/database.php";
include "../objects/elements/book.php";
include "../objects/elements/dvd.php";
include "../objects/elements/furniture.php";

$database = new Database();
$db = $database->getConnection();

$book = new Book($db);

$data = json_decode(file_get_contents("php://input"));

$book->sku = $data->sku;

if($book->delete())
{
    http_response_code(200);

    echo json_encode(array("message" => "Product deleted!"), JSON_UNESCAPED_UNICODE);
}
else 
{
    http_response_code(503);

    echo json_encode(array("message" => "Can`t delete file!"));
}
?>
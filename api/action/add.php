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

if (
    !empty($data->sku) &&
    !empty($data->name) &&
    !empty($data->price) &&
    !empty($data->description)
)
{
    $book->sku = $data->sku;
    $book->name = $data->name;
    $book->price = $data->price;
    $book->weight = $data->description;

    if($book->add())
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

    echo json_encode(array("message" => "Can`t create. Missed data!"),JSON_UNESCAPED_UNICODE);
}
?>
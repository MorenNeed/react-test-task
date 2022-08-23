<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once "../config/database.php";
include "../objects/elements/book.php";
include "../objects/elements/dvd.php";
include "../objects/elements/furniture.php";

$database = new Database();
$db = $database->getConnection();

$book = new Book($db);

$stmt = $book->read();
$num = $stmt->rowCount();

if($num>0)
{
    $products_arr = array();
    $products_arr["records"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC))
    {
        extract($row);

        $product_item = array(
            "sku" => $sku,
            "name" => $name,
            "price" => $price,
            "description" => $description
        );

        array_push($products_arr["records"], $product_item);

    }

    http_response_code(200);

    echo json_encode($products_arr);
}
else
{
    http_response_code(404);

    echo json_encode(array("message" => "No products!"), JSON_UNESCAPED_UNICODE);
}
?>
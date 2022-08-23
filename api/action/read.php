<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once "/Users/Alex/source/repos/react-test-task/api/objects/elements/book.php";
include_once "/Users/Alex/source/repos/react-test-task/api/objects/elements/dvd.php";
include_once "/Users/Alex/source/repos/react-test-task/api/objects/elements/furniture.php";

$database = new Database();
$db = $database->getConnection();

$book = new Book($db);

$stmt = $book->read();
$num = mysqli_num_rows($stmt);

if($num>0)
{
    $products_arr = array();
    $products_arr["records"] = array();

    while($row = mysqli_fetch_assoc($stmt))
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
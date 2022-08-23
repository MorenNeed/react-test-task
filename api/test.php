<?php
$connect = mysqli_connect("localhost", "root", "root", "test_db", 3306);
$sql = "SELECT * FROM products ORDER BY sku DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();

while($row = mysqli_fetch_assoc($result))
{
    $json_array []= $row;
}
echo json_encode($json_array);
?>
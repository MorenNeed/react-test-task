<?php
class DBCommands
{
    private $stmt;
    private $conn;
    private $query;
    function __construct()
    {
        $this->conn = (new Database)->getConnection();
    }
    protected function compare($sku)
    {
        $this->query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/compare.sql');

        $this->stmt = $this->conn->prepare($this->query);

        $sku=htmlspecialchars(strip_tags($sku));

        $this->stmt->bind_param('s', $sku);
        $this->stmt->execute();
        $this->stmt->store_result();
        if($this->stmt->num_rows() != 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    protected function set($sku, $name, $price, $description)
    {
        $this->query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/insert.sql');

        $this->stmt = $this->conn->prepare($this->query);

        $sku=htmlspecialchars(strip_tags($sku));
        $name=htmlspecialchars(strip_tags($name));
        $price=htmlspecialchars(strip_tags($price));
        $description=htmlspecialchars(strip_tags($description));


        $this->stmt->bind_param('ssds', $sku, $name, $price, $description);
        if ($this->stmt->execute())
        {
            return true;
        }
        return false;
    }
    protected function get()
    {
        $this->query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/select.sql');

        $this->stmt = mysqli_query($this->conn, $this->query);

        return $this->stmt;
    }
    protected function delete($delete_data)
    {
        $this->query = file_get_contents('/Users/Alex/source/repos/react-test-task/api/database/delete.sql');
        $delete_data = htmlspecialchars(strip_tags($delete_data));

        $this->stmt = $this->conn->prepare($this->query);

        $this->stmt->bind_param('s', $delete_data);

        if ($this->stmt->execute())
        {
            return true;
        }
        return false;
    }
}
?>
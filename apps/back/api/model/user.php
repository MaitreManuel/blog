<?php

class User {

    private $conn;
    private $table_name = "users";

    public $user_id;
    public $user_firstname;
    public $user_lastname;
    public $user_mail;
    public $user_password;
    public $user_pseudo;
    public $user_is_admin;

    public function __construct($db) {
        $this->conn = $db;
    }

    function read() {
        $query = "SELECT
                    user_firstname,
                    user_lastname,
                    user_id,
                    user_mail,
                    user_password,
                    user_pseudo,
                    user_is_admin
                    FROM". $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}

?>

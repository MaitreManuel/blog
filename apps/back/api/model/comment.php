<?php

class Comment {

    private $conn;
    private $table_name = "comments";

    public $comment_id;
    public $comment_authorid;
    public $comment_articleid;
    public $comment_content;
    public $comment_title;
    public $comment_date;

    public function __construct($db) {
        $this->conn = $db;
    }

    function read() {
        $query = "SELECT
                    comment_id,
                    comment_authorid,
                    comment_articleid,
                    comment_content,
                    comment_title,
                    comment_date
                    FROM". $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}

?>

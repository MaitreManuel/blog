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

    function readAllFromId($article_id) {
        $query = "SELECT
                    comments.comment_id,
                    comments.comment_authorid,
                    comments.comment_articleid,
                    comments.comment_content,
                    comments.comment_title,
                    comments.comment_date,
                    users.user_firstname,
                    users.user_lastname
                  FROM ". $this->table_name ."
                  INNER JOIN articles ON
                  comments.comment_articleid = ". $article_id ."
                  LEFT JOIN users
                  ON comments.comment_authorid = users.user_id
                  WHERE comments.comment_articleid = ". $article_id ."
                  ORDER BY comments.comment_date DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}

?>

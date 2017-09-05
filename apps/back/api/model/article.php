<?php

class Article {

    private $conn;
    private $table_name = "articles";

    public $article_id;
    public $article_title;
    public $article_intro;
    public $article_content;
    public $article_authorid;
    public $article_tagslist;
    public $article_publicationdate;
    public $article_updatedate;
    public $article_coverpath;

    public function __construct($db) {
        $this->conn = $db;
    }

    function read() {
        $query = "SELECT
                    article_id,
                    article_title,
                    article_intro,
                    article_content,
                    article_authorid,
                    article_tagslist,
                    article_publicationdate,
                    article_updatedate,
                    article_coverpath
                    FROM". $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}

?>

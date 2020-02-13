<?php
class Model extends Database {

    /**
     * Generic function that handles CRUD actions from the front-end.
     */
    public function getAction($actionType, $fields = [], $id = "") {

        switch($actionType) {
            case "fetchData":                 
                // reads all data
                $query = $this->startConnection()->prepare("SELECT * FROM test_table");
                $query->execute();
                
                $result = $query->fetchAll(PDO::FETCH_ASSOC);
                
                return count($result) > 0 ? $result : [];
            break;
            // the rest..
        };

    }
    

}
?>
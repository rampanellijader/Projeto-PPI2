<?php
    class Usuario {
        public $id;
        public $email;
        public $senha;

        function __construct($id, $email, $senha){
            $this->id = $id;
            $this->email = $email;
            $this->senha = $senha;
        }
    }
?>
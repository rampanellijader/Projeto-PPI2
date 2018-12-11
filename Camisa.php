<?php
    class Camisa {
        public $id;
        public $modelo;
        public $tamanho;
        public $preco;

        function __construct($id, $modelo, $tamanho, $preco){
            $this->id = $id;
            $this->modelo = $modelo;
            $this->tamanho = $tamanho;
            $this->preco = $preco;
        }
    }
?>
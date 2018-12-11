<?php
    include_once 'Camisa.php';
	include_once 'PDOFactory.php';

    class CamisaDAO
    {
        public function inserir(Camisa $camisa)
        {
            $qInserir = "INSERT INTO camisas(modelo,tamanho,preco) VALUES (:modelo, :tamanho, :preco)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":modelo",$camisa->modelo);
            $comando->bindParam(":tamanho",$camisa->tamanho);
            $comando->bindParam(":preco",$camisa->preco);
            $comando->execute();
            $camisa->id = $pdo->lastInsertId();
            return $camisa;
        }

        public function deletar($id)
        {
            $qDeletar = "DELETE from camisas WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
        }

        public function atualizar(Camisa $camisa)
        {
            $qAtualizar = "UPDATE camisas SET modelo=:modelo, tamanho=:tamanho, preco=:preco WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":modelo",$camisa->modelo);
            $comando->bindParam(":tamanho",$camisa->tamanho);
            $comando->bindParam(":preco",$camisa->preco);
            $comando->bindParam(":id",$camisa->id);
            $comando->execute();        
        }

        public function listar()
        {
		    $query = 'SELECT * FROM camisas';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $camisas=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $camisas[] = new Camisa($row->id,$row->modelo, $row->tamanho, $row->preco);
            }
            return $camisas;
        }

        public function buscarPorId($id)
        {
 		    $query = 'SELECT * FROM camisas WHERE id=:id';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id', $id);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Camisa($result->id,$result->modelo, $result->tamanho, $result->preco);           
        }
    }
?>
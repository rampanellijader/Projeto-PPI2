<?php
    include_once 'Usuario.php';
	include_once 'PDOFactory.php';

    class UsuarioDAO
    {
        public function inserir(Usuario $usuario)
        {
            $qInserir = "INSERT INTO usuarios(email,senha) VALUES (:email, :senha)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":email",$usuario->email);
            $comando->bindParam(":senha",$usuario->senha);
            $comando->execute();
            $usuario->id = $pdo->lastInsertId();
            return $usuario;
        }

        public function deletar($id)
        {
            $qDeletar = "DELETE from usuarios WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id",$id);
            $comando->execute();
        }

        public function atualizar(Usuario $usuario)
        {
            $qAtualizar = "UPDATE usuarios SET email=:email, senha=:senha WHERE id=:id";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":email",$usuario->email);
            $comando->bindParam(":senha",$usuario->senha);
            $comando->bindParam(":id",$usuario->id);
            $comando->execute();        
        }

        public function listar()
        {
		    $query = 'SELECT * FROM usuarios';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $usuarios_array=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $usuarios_array[] = new Usuario($row->id,$row->email, $row->senha);
            }
            return $usuarios_array;
        }

        public function buscarPorId($id)
        {
 		    $query = 'SELECT * FROM usuarios WHERE id=:id';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id', $id);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Usuario($result->id,$result->email, $result->senha);           
        }
    }
?>
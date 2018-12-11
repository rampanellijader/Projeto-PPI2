<?php

    include_once 'Camisa.php';
    include_once 'CamisaDAO.php';

    class CamisaController{
        public function listar($request, $response, $args)
        {
            $dao = new CamisaDAO;    
            $array_camisas = $dao->listar();        
            $response = $response->withJson($array_camisas);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function buscarPorId($request, $response, $args)
        {
            $id = (int) $args['id'];
            
            $dao = new CamisaDAO;    
            $camisa = $dao->buscarPorId($id);  
                
            $response = $response->withJson($camisa);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function inserir($request, $response, $args)
        {
            $var = $request->getParsedBody();
            $camisa = new Camisa($id, $var['modelo'], $var['tamanho'], $var['preco']);
        
            $dao = new CamisaDAO;    
            $camisa = $dao->inserir($camisa);
        
            $response = $response->withJson($camisa);
            $response = $response->withHeader('Content-type', 'application/json');    
            $response = $response->withStatus(201);
            return $response;
        }
        public function atualizar($request, $response, $args)
        {
            $id = (int) $args['id'];
            $var = $request->getParsedBody();
            $camisa = new Camisa($id, $var['modelo'], $var['tamanho'], $var['preco']);
        
            $dao = new CamisaDAO;    
            $dao->atualizar($camisa);
        
            $response = $response->withJson($camisa);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;        
        }
        public function deletar($request, $response, $args)
        {
            $id = (int) $args['id'];
            
            $dao = new CamisaDAO; 
            $camisa = $dao->buscarPorId($id);   
            $dao->deletar($id);
            
            $response = $response->withJson($camisa);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
    }

?>
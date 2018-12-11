<?php

    include_once 'Usuario.php';
    include_once 'UsuarioDAO.php';

    class UsuarioController{
        public function listar($request, $response, $args)
        {
            $dao = new UsuarioDAO;    
            $array_usuarios = $dao->listar();        
            
            $response = $response->withJson($array_usuarios);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function buscarPorId($request, $response, $args)
        {
            $id = (int) $args['id'];
            
            $dao = new UsuarioDAO;    
            $usuario = $dao->buscarPorId($id);  
                
            $response = $response->withJson($usuario);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
        public function inserir($request, $response, $args)
        {
            $var = $request->getParsedBody();
            $usuario = new Usuario($id, $var['email'], $var['senha']);
        
            $dao = new UsuarioDAO;    
            $usuario = $dao->inserir($usuario);
        
            $response = $response->withJson($usuario);
            $response = $response->withHeader('Content-type', 'application/json');    
            $response = $response->withStatus(201);
            return $response;
        }
        public function atualizar($request, $response, $args)
        {
            $id = (int) $args['id'];
            $var = $request->getParsedBody();
            $usuario = new Usuario($id, $var['email'], $var['senha']);
        
            $dao = new UsuarioDAO;    
            $dao->atualizar($usuario);
        
            $response = $response->withJson($usuario);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;        
        }
        public function deletar($request, $response, $args)
        {
            $id = (int) $args['id'];
            
            $dao = new UsuarioDAO; 
            $usuario = $dao->buscarPorId($id);   
            $dao->deletar($id);
            
            $response = $response->withJson($usuario);
            $response = $response->withHeader('Content-type', 'application/json');    
            return $response;
        }
    }

?>
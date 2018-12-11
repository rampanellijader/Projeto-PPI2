<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

include_once 'CamisaController.php';
include_once 'UsuarioController.php';
require './vendor/autoload.php';

$app = new \Slim\App;

$app->group('/api/camisas', function(){
    $this->get('','CamisaController:listar');
    $this->post('','CamisaController:inserir');

    $this->get('/{id:[0-9]+}','CamisaController:buscarPorId');
    $this->put('/{id:[0-9]+}','CamisaController:atualizar');
    $this->delete('/{id:[0-9]+}','CamisaController:deletar');
    
});


$app->group('/api/usuarios', function(){
    $this->get('','UsuarioController:listar');
    $this->post('','UsuarioController:inserir');

    $this->get('/{id:[0-9]+}','UsuarioController:buscarPorId');
    $this->put('/{id:[0-9]+}','UsuarioController:atualizar');
    $this->delete('/{id:[0-9]+}','UsuarioController:deletar');
    
});


$app->run();
?>
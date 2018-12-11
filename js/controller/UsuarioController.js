class UsuarioController{
    constructor(){
        this.service = new UsuarioHttpService();
        this.tabelaview = new TabelaUsuariosView(this,"main");
        this.formview = new FormUsuariosView(this,"main");
    }

    carregaFormulario(event){
        event.preventDefault();
        console.log(JSON.stringify(event));
        this.formview.montarForm();              
    }

    carregaFormularioComUsuario(id, event){
        event.preventDefault();             
        
        const self = this;
        const ok = function(usuario){
            self.formview.montarForm(usuario);
        }
        const erro = function(status){
            console.log(status);
        }

        this.service.buscarUsuario(id,ok,erro);   
    }

    salvarUsuario(event){
        event.preventDefault();
    
        let usuario = this.formview.getDataUsuario();
        
        const self = this;

        this.service.enviarUsuario(usuario, 
            () => {
                self.formview.limparFormulario();
                self.carregarUsuarios();
            },
            (status) => console.log(status)
        );
    }


    editarUsuario(id,event){
        event.preventDefault();
    
        let usuario = this.formview.getDataUsuario();
        
        const self = this;

        this.service.atualizarUsuario(id,usuario, 
            () => {
                self.formview.limparFormulario();
                self.carregarUsuarios();
            },
            (status) => console.log(status)
        );

    }
    
    
    carregarUsuarios(event) {   
        const self = this;
        const ok = function(listaUsuarios){
            self.tabelaview.montarTabela(listaUsuarios);              
        }
        const erro = function(status){
            console.log(status);
        }

        this.service.buscarUsuarios(ok,erro);
    }

    deletarUsuario(id, event){
        event.preventDefault();
            
        const self = this;

        this.service.deletarUsuario(id, 
            () => {
                self.carregarUsuarios();
            },
            (status) => console.log(status)
        );
    }

}
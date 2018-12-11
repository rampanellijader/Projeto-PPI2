class CamisaController{
    constructor(){
        this.service = new CamisaHttpService();
        this.tabelaview = new TabelaCamisasView(this,"main");
        this.formview = new FormCamisasView(this,"main");
    }

    carregaFormulario(event){
        event.preventDefault();
        console.log(JSON.stringify(event));
        this.formview.montarForm();              
    }

    carregaFormularioComCamisa(id, event){
        event.preventDefault();             
        
        const self = this;
        const ok = function(camisa){
            self.formview.montarForm(camisa);
        }
        const erro = function(status){
            console.log(status);
        }

        this.service.buscarCamisa(id,ok,erro);   
    }

    salvarCamisa(event){
        event.preventDefault();
    
        let camisa = this.formview.getDataCamisa();
        
        const self = this;

        this.service.enviarCamisa(camisa, 
            () => {
                self.formview.limparFormulario();
                self.carregarCamisas();
            },
            (status) => console.log(status)
        );
    }


    editarCamisa(id,event){
        event.preventDefault();
    
        let camisa = this.formview.getDataCamisa();
        
        const self = this;

        this.service.atualizarCamisa(id,camisa, 
            () => {
                self.formview.limparFormulario();
                self.carregarCamisas();
            },
            (status) => console.log(status)
        );

    }
    
    
    carregarCamisas(event) {   
        const self = this;
        const ok = function(listaCamisas){
            self.tabelaview.montarTabela(listaCamisas);              
        }
        const erro = function(status){
            console.log(status);
        }

        this.service.buscarCamisas(ok,erro);
    }

    deletarCamisa(id, event){
        event.preventDefault();
            
        const self = this;

        this.service.deletarCamisa(id, 
            () => {
                self.carregarCamisas();
            },
            (status) => console.log(status)
        );
    }

}
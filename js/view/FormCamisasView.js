class FormCamisasView{
    constructor(controller, seletor){
        this.controller = controller;
        this.formcamisas = document.querySelector(seletor);
    }

    montarForm(camisa){
        if(!camisa){
            camisa = new Camisa();
        }
        var str=`
        <h2>Cadastro de Camisas</h2>
        <form id="form">
            <input type="hidden" id="idcamisa" value="${camisa.id}" />
            <label for="modelo">Modelo:</label>    
            <input type="text" id="modelo" value="${camisa.modelo ?camisa.modelo :''}"/> <br/>
            <label for="tamanho">Tamanho:</label>  
            <input type="text" id="tamanho" value="${camisa.tamanho ?camisa.tamanho :''}"/> <br/>
            <label for="preco">Preço:</label>
            <input type="text" id="preco" value="${camisa.preco ?camisa.preco :''}"/> <br/>
            <input type="submit" value="Salvar" />
            <input type="button" value="Cancelar" id="botaocancelar" />
        </form>`;
    
        this.formcamisas.innerHTML = str;

        let elForm = document.querySelector("form");
        if(!camisa.id){
            elForm.addEventListener("submit",this.controller.salvarCamisa.bind(this.controller));
        }
        else {
            elForm.addEventListener("submit",this.controller.editarCamisa.bind(this.controller, camisa.id));
        }
        const botaocancelar = document.querySelector("#botaocancelar");
        botaocancelar.addEventListener("click",this.controller.carregarCamisas.bind(this.controller));

    }

    limparFormulario(){
        document.querySelector("#idcamisa").value="";
        document.querySelector("#modelo").value="";
        document.querySelector("#tamanho").value="";
        document.querySelector("#preco").value="";
    }

    getDataCamisa(){
        let camisa = new Camisa();
        if(!document.querySelector("#idcamisa").value)
        camisa.id = document.querySelector("#idcamisa").value;
        camisa.modelo = document.querySelector("#modelo").value;
        camisa.tamanho = document.querySelector("#tamanho").value;
        camisa.preco = document.querySelector("#preco").value;
        return camisa;        
    }
}
class FormUsuariosView{
    constructor(controller, seletor){
        this.controller = controller;
        this.formusuarios = document.querySelector(seletor);
    }

    montarForm(usuario){
        if(!usuario){
            usuario = new Usuario();
        }
        var str=`
        <h2>Cadastro de Camisas</h2>
        <form>
            <input type="hidden" id="idusuario" value="${usuario.id}" />
            <label for="email">E-mail:</label>    
            <input type="text" id="email" value="${usuario.email ?usuario.email :''}"/> <br/>
            <label for="senha">Senha:</label>    
            <input type="text" id="senha" value="${usuario.senha ?usuario.senha :''}"/> <br/>
            <input type="submit" value="Salvar" />
            <input type="button" value="Cancelar" id="botaocancelar" />
        </form>`;
    
        this.formusuarios.innerHTML = str;

        let elForm = document.querySelector("form");
        if(!usuario.id){
            elForm.addEventListener("submit",this.controller.salvarUsuario.bind(this.controller));
        }
        else {
            elForm.addEventListener("submit",this.controller.editarUsuario.bind(this.controller, usuario.id));
        }
        const botaocancelar = document.querySelector("#botaocancelar");
        botaocancelar.addEventListener("click",this.controller.carregarUsuarios.bind(this.controller));

    }

    limparFormulario(){
        document.querySelector("#idusuario").value="";
        document.querySelector("#email").value="";
        document.querySelector("#senha").value="";
    }

    getDataUsuario(){
        let usuario = new Usuario();
        if(!document.querySelector("#idusuario").value)
        usuario.id = document.querySelector("#idusuario").value;
        usuario.email = document.querySelector("#email").value;
        usuario.senha = document.querySelector("#senha").value;
        return usuario;        
    }
}
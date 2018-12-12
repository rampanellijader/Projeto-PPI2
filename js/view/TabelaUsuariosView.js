class TabelaUsuariosView{
    constructor(controller, seletor){
        this.controller = controller;
        this.tabelausuarios = document.querySelector(seletor);
    }

    montarTabela(usuarios){
        const self = this;
  
        var str=`
        <h2>Tabela de Usuários</h2>   
        <a id='novo' href='#usuarios'>Novo</a>     
        <table>
            <tr>
                <th>E-mail</th>
                <th>Senha</th>
                <th colspan="2">Ação</th>
            </tr>
    
        ${usuarios.map(function(usuario){
            return `
            <tr id=${usuario.id}>
                <td>${usuario.email}</td>
                <td>${usuario.senha}</td>
                <td><a class="edit" href="#">Editar</a></td>
                <td><a class="delete" href="#">Deletar</a></td>
            </tr>
            `;
        }).join("")}
        
        </table>`;
    
        console.log(str);
        this.tabelausuarios.innerHTML = str;

        const linkNovo = document.querySelector("#novo");
        linkNovo.addEventListener("click",this.controller.carregaFormulario.bind(this.controller));
        
        const linksDelete = document.querySelectorAll(".delete");
        for(let linkDelete of linksDelete)
        {
            const id = linkDelete.parentNode.parentNode.id;
            linkDelete.addEventListener("click",this.controller.deletarUsuario.bind(this.controller,id));
        }

        const linksEdit = document.querySelectorAll(".edit");
        for(let linkEdit of linksEdit)
        {
            const id = linkEdit.parentNode.parentNode.id;
            linkEdit.addEventListener("click",this.controller.carregaFormularioComUsuario.bind(this.controller,id));
        }
    }
}
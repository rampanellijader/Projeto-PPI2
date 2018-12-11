class TabelaCamisasView{
    constructor(controller, seletor){
        this.controller = controller;
        this.tabelacamisas = document.querySelector(seletor);
    }

    montarTabela(camisas){
        const self = this;
  
        var str=`
        <h2>Tabela de Usuários</h2>   
        <a id='novo' href='#'>Novo</a>     
        <table>
            <tr>
                <th>Modelo</th>
                <th>Tamanho</th>
                <th>Preço</th>
                <th colspan="2">Ação</th>
            </tr>
    
        ${camisas.map(function(camisa){
            return `
            <tr id=${camisa.id}>
                <td>${camisa.modelo}</td>
                <td>${camisa.tamanho}</td>
                <td>${camisa.preco}</td>
                <td><a class="edit" href="#">Editar</a></td>
                <td><a class="delete" href="#">Excluir</a></td>
            </tr>
            `;
        }).join("")}
        
        </table>`;
    
        console.log(str);
        this.tabelacamisas.innerHTML = str;

        const linkNovo = document.querySelector("#novo");
        linkNovo.addEventListener("click",this.controller.carregaFormulario.bind(this.controller));
        
        const linksDelete = document.querySelectorAll(".delete");
        for(let linkDelete of linksDelete)
        {
            const id = linkDelete.parentNode.parentNode.id;
            linkDelete.addEventListener("click",this.controller.deletarCamisa.bind(this.controller,id));
        }

        const linksEdit = document.querySelectorAll(".edit");
        for(let linkEdit of linksEdit)
        {
            const id = linkEdit.parentNode.parentNode.id;
            linkEdit.addEventListener("click",this.controller.carregaFormularioComCamisa.bind(this.controller,id));
        }
    }
}
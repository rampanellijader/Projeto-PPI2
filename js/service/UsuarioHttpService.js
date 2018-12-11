class UsuarioHttpService{
    constructor(){
        // this.uri = "http://localhost:8080/api/usuarios";
    }

    enviarUsuario(usuario,ok,error){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                ok();
            }
            else if(this.status !== 201){
                error(this.status);
            }
        };
        xhttp.open("POST", "http://localhost:8080/api/usuarios", true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(usuario));
    }

    atualizarUsuario(id,usuario,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));          
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("PUT", "http://localhost:8080/api/usuarios/"+id, true);
        xhttp.setRequestHeader("Content-Type","application/json")
        xhttp.send(JSON.stringify(usuario));
    }



    buscarUsuarios(ok, error) {        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));                
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("GET", "http://localhost:8080/api/usuarios", true);
        xhttp.send();
    }   

    buscarUsuario(id,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));          
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("GET", "http://localhost:8080/api/usuarios/"+id, true);
        xhttp.send();
    }

    
    deletarUsuario(id,ok,error){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok();
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("DELETE", "http://localhost:8080/api/usuarios/"+id, true);
        xhttp.send();
    } 




}
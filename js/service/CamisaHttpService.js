class CamisaHttpService{
    constructor(){
        // this.uri = "http://localhost:8080/api/camisas";
    }

    enviarCamisa(camisa,ok,error){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                ok();
            }
            else if(this.status !== 201){
                error(this.status);
            }
        };
        xhttp.open("POST", "http://localhost:8080/api/camisas", true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(camisa));
    }

    atualizarCamisa(id,camisa,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));          
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("PUT", "http://localhost:8080/api/camisas/"+id, true);
        xhttp.setRequestHeader("Content-Type","application/json")
        xhttp.send(JSON.stringify(camisa));
    }



    buscarCamisas(ok, error) {        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));                
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("GET", "http://localhost:8080/api/camisas", true);
        xhttp.send();
    }   

    buscarCamisa(id,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));          
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("GET", "http://localhost:8080/api/camisas/"+id, true);
        xhttp.send();
    }

    
    deletarCamisa(id,ok,error){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok();
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("DELETE", "http://localhost:8080/api/camisas/"+id, true);
        xhttp.send();
    } 




}
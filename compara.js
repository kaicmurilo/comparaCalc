class Calculo{

    constructor(){
     this.arrClientes = [];
    }
   

    leitura(){
            //Lendo
            let camp1= document.getElementById("s1");
            let valor1 = camp1.value;

            let camp2 = document.getElementById("s2");
            let valor2 =  camp2.value;
            //objeto
            let cliente = {};

            cliente.s1= valor1;
            cliente.s2= valor2;
            cliente.s3="NENHUM";
            return  cliente;
    }

    validar (cliente){
        let errors = [];

         if ( cliente.s1 =="") {
            errors.push( {msg:"VALOR 1 VAZIO"} );
         }else if(cliente.s2 =="") {
                errors.push({msg:"VALOR 2 VAZIO"});
        }
         return errors; 
    }


    salvar (){

    
        //leitura
       let cliente =  this.leitura();
        //Valida
       let errors = this.validar (cliente);

        //Incluindo do vetor
        if (errors.length==0){
            this.arrClientes.push(cliente);
        }

        //Limpar o form
        this.limparForm();
       //Saida
       this.mensagem (errors);
        // GERAR COMPARAÇÃO
       this.compararValores(cliente);
        //Gerar a lista da tela
       this.atualizarLista();

       
    }

    mensagem(errors){

        let msg = document.getElementById("mensagem");
     
        if (errors.length==0){
            msg.innerHTML = "Sucesso!";
        }    else {

            for (let i =0 ; i< errors.length ; i++){
                msg.innerHTML += errors[i].msg + "<br>";
            }
        }

    }

    limparForm(){
        let camp1= document.getElementById("s1");
        camp1.value="";

        let camp2 = document.getElementById("s2");
         camp2.value="";
    }

compararValores(cliente){
            if(cliente.s1>cliente.s2 && cliente.s1!=cliente.s2){
                 cliente.s3 =cliente.s1;
                 
            }else if(cliente.s1<cliente.s2 && cliente.s1!=cliente.s2){
               cliente.s3=cliente.s2;
                
            }
}

    atualizarLista(){
        let table  = document.getElementById("tbcli"); 
      
        table.innerHTML= "";
       
        for (let i=0; i< this.arrClientes.length; i++){

            let cliente =  this.arrClientes[i];
            let tr = document.createElement("tr");  
          
            
            let td = document.createElement("td");  
            let texto=  document.createTextNode(cliente.s1) ; 
            td.appendChild(texto);
            tr.appendChild(td);
            
            //TD - VALOR1

            let td2 = document.createElement("td");  
            let texto2=  document.createTextNode(cliente.s2) ; 
            td2.appendChild(texto2);
            tr.appendChild(td2);
           
            //TD - VALOR2

            let td3 = document.createElement("td");  
            let texto3=  document.createTextNode(cliente.s3) ; 
            td3.appendChild(texto3);
            tr.appendChild(td3);

            //TD - RESULTADO

            table.appendChild(tr); 
        }
    
    }
}

var calc = new Calculo();


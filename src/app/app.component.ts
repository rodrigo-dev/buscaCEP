import { Component } from '@angular/core';
import { ConsumoApiService} from './Core/Services/consumoapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorInput: "";
  textCongrats: any;
   endereco: {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
  }


constructor(private Servico : ConsumoApiService){}

 async value(event : any){
    this.valorInput = event
    
  }
  Search(){
    console.log('to aqui')
      this.Servico.getCEP(this.valorInput).subscribe((response : any) =>{
        this.endereco = response
        this.textCongrats = "Obrigado por pesquisar aqui."
      })
    }
  validar(){
    const Regex = /[a-z]/gi;
    const validador = Regex.test(this.valorInput);
    if(validador === true){
      alert('Letras ou campos brancos não são válidas')
      console.error("Letras ou campos brancos não são válidas")
    }
  }
}

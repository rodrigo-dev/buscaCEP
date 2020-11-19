import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorInput: "";



  value(event){
    this.valorInput = event
    
  }
  Search(){
    const Regex = /[a-z]/gi;
    const validador = Regex.test(this.valorInput);
    if(validador === true){
      alert('Letras ou campos brancos não são válidas')
      console.error("Letras ou campos brancos não são válidas")
      
    }else{
      console.log('de boas')
    }
  }
}

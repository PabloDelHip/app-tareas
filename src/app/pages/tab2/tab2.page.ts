import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //se agregar el servicio en el costructor para poder utilizarlo en toda la aplicacion
  constructor( public deseosService: DeseosService) {}

}

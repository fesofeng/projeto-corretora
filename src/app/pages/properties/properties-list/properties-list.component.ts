import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Property } from '../shared/property.model';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  public listProperties:Array<Property> = [];

  constructor(private propertyService:PropertiesService, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.propertyService.listAll().subscribe(
      res=>{this.listProperties = res}
    )

  }


  public removerProperty(propertyId:any){

    if(!window.confirm(`Deseja excluir o imóvel de ID ${propertyId} ?`)){
      return;
    }

    this.propertyService.delete(propertyId).subscribe(
      res => {
        this.toastr.success(`Imóvel de ID ${propertyId} excluído com sucesso!`)
        this.listProperties = this.listProperties.filter( e => e.id !== propertyId);
      },
      err =>{
        this.toastr.error(`Falha ao excluir imóvel de ID: ${propertyId}!`)
      }
    )

  }




  updateList($event:Property){

    this.listProperties.push($event)

  }

}

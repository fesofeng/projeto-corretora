import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Property } from '../shared/property.model';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-properties-new',
  templateUrl: './properties-new.component.html',
  styleUrls: ['./properties-new.component.css']
})
export class PropertiesNewComponent implements OnInit {

  public formProperty:FormGroup;

  @Output() newProperty:EventEmitter<Property> = new EventEmitter();

  constructor(private fb:FormBuilder, private propertiesService:PropertiesService, private toastr:ToastrService) { 
    this.formProperty = this.buildFormProperty();
  }

  ngOnInit(): void {
  }


  private buildFormProperty():FormGroup{
    return this.fb.group({
      id: [null, [Validators.required]],
      address: [null, [Validators.required]],
      priceForPurchase: [null, [Validators.required]]
    })
  }

  public isFormControlInvalid(controlId:string):boolean{
    return !!(this.formProperty.get(controlId)?.invalid && this.formProperty.get(controlId)?.touched)
  }


  public saveNewProperty():void{

    const newProperty:Property = this.formProperty.value as Property;

    this.propertiesService.saveNew(newProperty).subscribe(
      res => {
        this.toastr.success("Novo imóvel salvo com sucesso!");
        this.formProperty.reset();
        this.newProperty.emit(res);
      },
      err =>{
        console.log(err);
        this.toastr.error("Falha ao salvar novo imóvel");
      }
    )

    console.log(this.formProperty.value);
  }

}

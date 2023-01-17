import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Property } from '../shared/property.model';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-properties-edit',
  templateUrl: './properties-edit.component.html',
  styleUrls: ['./properties-edit.component.css']
})
export class PropertiesEditComponent implements OnInit {

  public formProperty: FormGroup;

  constructor(private fb: FormBuilder,
    private propertiesService: PropertiesService,
    private toastr: ToastrService,
    private router: Router,
    private activedRoute: ActivatedRoute) {

    this.formProperty = this.buildFormProperty();

  }

  ngOnInit(): void {

    const propertyId = Number(this.activedRoute.snapshot.paramMap.get('id'));

    console.log('Property ID: ', propertyId)

    this.propertiesService.listById(propertyId).subscribe(
      res => {
        // console.log(res)
        this.formProperty.patchValue(res)
      },
      err => {
        this.toastr.error(err)
      }
    )
  }


  private buildFormProperty(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      address: [null, Validators.required],
      priceForPurchase: [null, [Validators.required]]
    })
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formProperty.get(controlName)?.invalid && this.formProperty.get(controlName)?.touched)
  }


  public updateProperty() {
    const property: Property = this.formProperty.value as Property;

    this.propertiesService.update(property).subscribe(
      res => {
        this.formProperty.reset();
        this.toastr.success(`Property ${property.id} atualizado.`)
        this.router.navigate(['properties'])
      },
      err => {
        this.toastr.error(`Falha ao atualizar ${property.id}.`)
      }
    )

  }

}

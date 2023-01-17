import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../shared/property.model';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-properties-view',
  templateUrl: './properties-view.component.html',
  styleUrls: ['./properties-view.component.css']
})
export class PropertiesViewComponent implements OnInit {

  public property:Property | any = null;

  constructor(private propertiesService:PropertiesService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const propertyId:number = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    this.propertiesService.listById(propertyId).subscribe(
      res=>this.property=res
    )

  }

}

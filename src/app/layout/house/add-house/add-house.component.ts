import { Component, OnInit } from '@angular/core';
import { HouseModule } from '../house.module';
import { HouseService } from '../house.service';
import { HouseModel } from '../house-model';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {
 houseModel:HouseModel= new HouseModel();

  constructor(private houseService:HouseService) { }

  ngOnInit() {
  }

  addHouse(){
    console.log(this.houseModel)
    // this.houseService.addHouse(this.houseModel).subscribe(
    //   data=>{
    //     console.log(data);
    //     let added = JSON.parse(JSON.parse(JSON.stringify(data))._body);
    //     console.log(added);
    // }
    // )
  }

}

import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { GoodService } from '../good.service'

@Component({
  selector: 'app-good-edit',
  templateUrl: './good-edit.component.html',
  styleUrls: ['./good-edit.component.scss']
})
export class GoodEditComponent implements OnInit {
  goodId:string="1";

  good:any={
    name:""
  };
    // Subscribe Declaration
  isNew:boolean = false;
  getGoodSubscribe:any;

  constructor(private route: ActivatedRoute,private goodServ:GoodService, private location: Location) {
    console.log(this.route.paramMap)
  }

  back(){
    this.location.back();
  }
  save(){
    this.goodServ.goods.push(this.good)
    this.location.back();
  }
  ngOnInit() {
    this.getGoodSubscribe = this.route.params.subscribe(params=>{
      this.getGood(params['sid']).then(good=>{
      console.log(good)
      this.goodId = good.id;
      this.good = good
    }).catch(err=>{
      console.log(err)
    })
    })
  }

  // ngOnDestroy(){
  //   this.getGoodSubscribe.unsubscribe();
  // }

  getGood(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let good = {name:""}
        this.isNew = true;
        resolve(good)
      }
      let good = this.goodServ.goods.find(item=>item.id == id)
      if(good){
        resolve(good)
      }else{
        reject("good not found")
      }
    })
    return p
}
}

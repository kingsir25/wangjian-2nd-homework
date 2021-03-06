import { Injectable } from "@angular/core";

@Injectable()
export class GoodService{
    isLogined:boolean = false;
    goods:Array<any> = [
    {"index":16,
    "name":"南瓜",
    "spec":"kg",
      "price":"￥2.00",
      "num":10,
      "Place":"东京",
      "timelimit":"1个月",
      "P_date":"2017-06-31",
      "Radomid":0},
      {"index":7,
      "name":"西瓜",
      "spec":"kg",
      "price":"￥3.00",
      "num":10,
      "Place":"北京",
      "timelimit":"2个月",
      "P_date":"2017-05-31",
      "Radomid":0},
      {"index":14,
      "name":"黄瓜",
      "spec":"kg",
      "price":"￥4.00",
      "num":10,
      "Place":"南京",
      "timelimit":"3个月",
      "P_date":"2017-02-31",
      "Radomid":0},
  ];

    constructor(){

    }

    getGoods(){
        return this.goods;
    }

}


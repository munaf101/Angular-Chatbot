import { Component, OnInit } from '@angular/core';

interface cart{
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: string;
  total: string;
  name:string,
  color:string,
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  objectArray: cart[];
  constructor() { 
    this.objectArray = [
      { id: 1, image: "./assets/images/ecommerce/01.jpg",name:"FLOWER POT",color:"Green and Black Color", title : "Book", price : "$411", total :'$411', quantity: 1},
      { id: 2, image: "./assets/images/products/8.jpg",name:"DESKTOP",color:"Green and Black Color", title : "Shoes", price : "$5436", total : '$5436', quantity: 2},
      { id: 4, image: "./assets/images/products/6.jpg",name:"CAMERA",color:"Green and Black Color", title : "Watch", price : "$540", total : '$540', quantity: 1},
      { id: 5, image: "./assets/images/ecommerce/06.jpg",name:"COLLAGE BAG",color:"Pink Color", title : "Cosmetics", price : "$1543", total : '$1543', quantity: 1},
   

    ];
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    const plus:any = document.querySelectorAll('#plus');
    const minus:any = document.querySelectorAll('#minus');
    function perfectChart(){
      plus.forEach( (element:any)=>{
        let parentDiv = element.parentElement.parentElement;
          element.addEventListener('click',()=>{
            parentDiv.children[1].value++
          })
      } )
      minus.forEach( (element:any)=>{
        let parentDiv = element.parentElement.parentElement;
          element.addEventListener('click',()=>{
             if(parentDiv.children[1].value  > 0){
              parentDiv.children[1].value-- 
             }
          })
      } )
    }
    perfectChart()
    } 
  RemoveElementFromObjectArray(key: number) {
    this.objectArray.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  }
 

}

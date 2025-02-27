import { Component } from '@angular/core';
const DATA = [ {
  id:"1",
  image :"./assets/images/ecommerce/01.jpg",
  name:"Wodden Flower vase",
  offerprice:2498,
  price:1967,
  rating:24

},
{
  id:"2",
  image :"./assets/images/ecommerce/02.jpg",
  name:"Simple Black Chair",
  offerprice:2999,
  price:1999,
  rating:64
},
{
  id:"3",
  image :"./assets/images/ecommerce/03.jpg",
  name:"Mens Formal Red Shoes",
  offerprice:1499,
  price:999,
  rating:41

},
{
  id:"4",
  image :"./assets/images/ecommerce/04.jpg",
  name:"Black Classic HeadPhones",
  offerprice:'4998',
  price:"2925",
  rating:232

},
{
  id:"5",
  image :"./assets/images/ecommerce/04.jpg",
  name:"Lens Camera lens",
  offerprice:'2998',
  price:"1998",
  rating:143

},
{
  id:"6",
  image :"./assets/images/ecommerce/06.jpg",
  name:"Energy School Bag",
  offerprice: 2999,
  price:2499,
  rating:29

},
{
  id:"7",
  image :"./assets/images/ecommerce/09.jpg",
  name:"Lens Camera",
  offerprice:3498,
  price:2999,
  rating:20

},
{
  id:"8",
  image :"./assets/images/ecommerce/08.jpg",
  name:"Mens Digital Watch",
  offerprice:2498,
  price:1967,
   rating:283

},
{
  id:"9",
  image :"./assets/images/ecommerce/07.jpg",
  name:"Laptop",
  offerprice:1499,
  price:1299,
  rating:14

},
{
  id:"10",
  image :"./assets/images/ecommerce/11.jpg",
  name:"Womens Party Wear Handbag",
  offerprice:2998,
  price:1998,
rating:143
},
{
  id:"11",
  image :"./assets/images/ecommerce/5.jpg",
  name:"Simple White stool",
  offerprice:2999,
  price:2499,
  rating:29

},
{
  id:"12",
  image :"./assets/images/ecommerce/2.jpg",
  name:"White Ear buds",
  offerprice:3998,
  price:2999,
  rating:20

}
];
@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent {
  productData = DATA;
  alphabetpage=3;
  constructor() { }

  ngOnInit(): void {
  }

  click = (id:string)=>{
    const data = this.productData.filter(x =>{
      return x.id != id;
    });
    this.productData = data;
  };
}

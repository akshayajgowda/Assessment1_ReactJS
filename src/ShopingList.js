import React, {Component} from 'react'
import ShopingDetails from './ShopingDetails'

 class ShopingList extends Component{
    constructor(props){
        super(props);
        this.state ={
           Shopings:[
            {"id":2,"name":"Hyundai  Venue","price":" 8 - 12 thousands","description":"May 2019","image_url":"https://i5.walmartimages.com/asr/4e7a38b5-117d-4a42-8ba9-171ec2ddbb39_1.81fd096f1cf48d619341f6ffc445ceb5.jpeg"},
            {"id":3,"name":"Porsche  New 911","price":" 1.4 - 2.88 lakhs","description":"Apr 2019","image_url":"https://i5.walmartimages.com/asr/26fbf53a-b70a-4ae5-8216-7263ac2b15f0_1.994fc7be192d1cc0f00592f4a3ec6366.jpeg"}

        ]
    }
    }
    render(){
        let listofShopDisplayed ='';
        if(this.props.searchName==''){
            listofShopDisplayed = this.state.Shopings.map((Shoping,index)=>{
                return <ShopingDetails key={index} details ={Shoping} add={this.props.add}delete={this.props.delete}/>
            })
        }
        else{
            let filterMovies =  this.state.Shopings.filter((Shoping,index)=>{
                return Shoping.name.includes (this.props.searchName)
            });
            listofShopDisplayed = filterMovies.map((Shoping,index)=>{
                return <ShopingDetails key={index} details ={Shoping} add={this.props.add}delete={this.props.delete}/>
            })
        }

return(
    <div>
       {listofShopDisplayed}
       
       </div>
)
    }
}

export default ShopingList;
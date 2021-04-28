
import Card from './Card';



export default function ListCard(listProduct) {


       if(listProduct.length>0)
       {
        return (
            <div className='row ListCard'>
                
                 { listProduct.map((item,index)=>(<Card key={index} product={item}></Card>)) } 
            </div>
        )
       }
       else
       {
           return(
               <div>meoss co cai chi hets</div>
           )
       }
    
}


import { Button, Card } from "antd"



const ProductsHero=()=>{
    const data=[
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        }
        ,
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        },
        {
            name:"Aditya",
            img:"/doors.jpeg",
            price:"1499-1500",
            description:"Aditya Kumar is a great scientist"
        }
    ]
    return (
        <>
        <h1 className="text-center md:text-4xl text-3xl py-8">Our Top Products</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3 p-2">
            {
                data.map((item,index)=>{
                    return (
                        <Card key={index} className="">
                <img src="doors.jpeg" />
                <h1>Aditya Kumar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, amet!</p>
                <div className="flex justify-evenly py-2">
                <Button>Contact Us</Button>
                <Button>1499-2000</Button>
                </div>
            </Card>
                    )
                })
            }
        </div>
        
        </>
    )

}
export default ProductsHero
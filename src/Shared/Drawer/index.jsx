
import { BoxPlotOutlined, MailFilled, MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { LocationOnOutlined } from "@mui/icons-material";
import { Button, Drawer } from "antd";
import React,{useState} from "react"
import { Link } from "react-router-dom";

const DrawerEl=()=>{
    const [open,setOpen]=useState(false);
    return (
        <>
          <Button type="text" className="md:hidden block text-white text-3xl" onClick={()=>setOpen(true)}><MenuOutlined/></Button>
          <Drawer open={open} onClose={()=>setOpen(false)} className="select-none">
              <ul className="text-xl grid grid-cols-1 gap-5">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about-us"><li>AboutUs</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/gallery"><li>Gallery</li></Link>
                <Link to="/contact-us"><li>Contact Us</li></Link>
              </ul>
              <div>
                  <div className="grid grid-cols-1 gap-3 py-4">
                     <div><MailFilled className="text-xl text-red-600"/><span className="text-xl text-blue-600">Email:</span> <b className="text-lg">a@gmail.com</b></div>
                     <div><BoxPlotOutlined className="text-xl text-red-600"/><span className="text-xl text-blue-600">Addres:</span> <b className="text-lg">Ganga Nagar Harmu ranchu</b></div>
                     <div><PhoneOutlined className="text-xl text-red-600"/><span className="text-xl text-blue-600">Phone: </span><b className="text-lg">9693245941</b></div>
                  </div>
                  <div>
                    <img src="/crousel4.jpg" className="w-full"/>
                  </div>
              </div>
          </Drawer>
        
        </>
    )

}
export default DrawerEl
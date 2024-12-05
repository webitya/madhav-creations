
import { BoxPlotOutlined, MailFilled, MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { LocationOnOutlined } from "@mui/icons-material";
import { Button, Drawer } from "antd";
import React,{useState} from "react"

const DrawerEl=()=>{
    const [open,setOpen]=useState(false);
    return (
        <>
          <Button type="text" className="md:hidden block text-white text-3xl" onClick={()=>setOpen(true)}><MenuOutlined/></Button>
          <Drawer open={open} onClose={()=>setOpen(false)}>
              <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Products</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
              <div>
                  <div>
                     <div><MailFilled/>Email: <b>a@gmail.com</b></div>
                     <div><BoxPlotOutlined/>Addres: <b>Ganga Nagar Harmu ranchu</b></div>
                     <div><PhoneOutlined/>Phone: <b>9693245941</b></div>
                  </div>
              </div>
          </Drawer>
        
        </>
    )

}
export default DrawerEl
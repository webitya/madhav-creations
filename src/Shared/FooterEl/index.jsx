import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const FooterEl= () => {
    const currentYear= new Date();
    return(
        <footer class="flex flex-col gap-12 items-center bg-[#221f1f] p-16 text-white">
            <div className="flex gap-16">
                <div ><a href="#" class="hover:underline">Home</a></div>
                <div ><a href="#" class="hover:underline">About</a></div>
                <div ><a href="#" class="hover:underline">Products</a></div>
                <div ><a href="#" class="hover:underline">Gallery</a></div>
                <div ><a href="#" class="hover:underline">Enquiry</a></div>
                <div ><a href="#" class="hover:underline">Contact</a></div>
            </div>

            <div class="flex gap-8">
                <a href="#" >
                    <span class="">
                        <WhatsAppIcon style={{fontSize: "1.75rem"}}/>        
                    </span>
                </a>
                <a href="#" >
                    <span class="">
                        <InstagramIcon style={{fontSize: "1.75rem"}}/>        
                    </span>
                </a>
                <a href="#" >
                    <span class="">
                        <XIcon style={{fontSize: "1.75rem"}}/>        
                    </span>
                </a>
                <a href="#" >
                    <span class="">
                    <FacebookIcon style={{fontSize: "1.75rem"}}/>  
                    </span>
                </a>
                <a href="#" >
                    <span class=""> 
                        <YouTubeIcon style={{fontSize: "1.75rem"}}/>      
                    </span>
                </a>
            </div>
            <p class="text-sm tracking-wide">
                © {currentYear.getFullYear()} Madhav Creation, Inc. All rights reserved.
            </p>
        </footer>
    );
}
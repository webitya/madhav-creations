import ContactUsHero from "../../components/ContactUs/ContactUsHero"
import LayoutEl from "../../Shared/LayoutEl"


const ContactUs=()=>{
    const display=(
        <>
          <LayoutEl>
            <h1 className="text-center md:text-5xl text-5xl  md:py-20 py-16 bg-gray-300">Contact Us</h1>
             <ContactUsHero/>
          </LayoutEl>
        </>
    )
    return display
}
export default ContactUs
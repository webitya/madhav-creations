import EmailJsForm from "./EmailJsForm"



const ContactUsHero=()=>{
    return (
        <>
        <div className="flex md:flex-row flex-col justify-center items-center p-2 gap-2 min-h-[500px]">
           <div className="py-10 bg-red-300 md:w-1/2 p-2 h-full">
                 <h1 className="text-3xl">Madhav Creation</h1>
                 <p className="text-lg">Welcome to Madhav Creation, your trusted partner in high-quality plywood and Sunmica solutions. Established with a vision to deliver excellence in interior and construction materials, we take pride in offering an extensive range of products tailored to meet the diverse needs of our customers.At Madhav Creation, we understand that every project is unique, whether it's crafting elegant interiors, designing modern furniture, or building durable structures. That's why we source only the finest materials to ensure durability, aesthetic appeal, and value for money.</p>
           </div>
           <div className="py-10 bg-green-300 md:w-1/2 w-full p-2 h-full">
                <EmailJsForm/>
           </div>
        </div>
        <div className="w-full p-2 ">
        <iframe className="w-full md:h-[300px] h-[250px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.6492225860097!2d85.29530047532414!3d23.364719678935405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e100349cfe83%3A0x7c34f0fd32e9e199!2sWebitya%20Web%20Services!5e0!3m2!1sen!2sin!4v1733385203450!5m2!1sen!2sin"  style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        </>
    )
}
export default ContactUsHero
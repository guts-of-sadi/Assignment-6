import footerlogo from "@/assets/footer.png"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="">
            <div className="divider"></div>
            <div className="container mx-auto my-10 px-4  flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div className="flex items-center gap-2">
                    <Image src={footerlogo} alt="footer" className="w-8 h-8 sm:w-10 sm:h-10"></Image>
                    <h3 className="text-white">FITLOG</h3>
                </div>
                <div>
                    <h4 className="text-[#6B7280] text-sm sm:text-base">© 2026 FitLog — Workout Library. Train hard, log honest.</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
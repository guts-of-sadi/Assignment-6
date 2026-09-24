import footerlogo from "@/assets/footer.png"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="">
            <div className="divider"></div>
            <div className="container mx-auto my-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src={footerlogo} alt="footer"></Image>
                    <h3>FITLOG</h3>
                </div>
                <div>
                    <h4 className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
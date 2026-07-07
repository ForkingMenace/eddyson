import Image from "next/image";

export default async function Footer (){
    return (
        <footer className="bg-[#161616] text-[#FFFFFF] pt-[120] pb-[141] mt-20 ">
            <div className="container">
                <Image
                    src="/img/eddyson2.png"
                    alt="Description of image"
                    width={177}
                    height={54}
                    />
            </div>

        </footer>
    );
}
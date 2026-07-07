import Image from "next/image";

export default async function Header() {
    return (
    <header className="container py-4">
        <Image
            src="/img/eddyson.png"
            alt="Description of image"
            width={177}
            height={54}
            />
    </header>
    );
}

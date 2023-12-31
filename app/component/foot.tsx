import Image from "next/image";
import Link from "next/link";

export default function Foot() {
    let date = new Date()
    let year = date.getFullYear()

    return (
        <div className="w-3/4 mx-auto text-white my-8">
            <div className=" flex justify-between">
                <div className="flex gap-3 ">
                    <Link href='https://www.linkedin.com/in/mochamad-fikri/'>
                        <Image className="transition duration-150 ease-in-out hover:-translate-y-2" alt="linkedin" width={50} height={50} src='/footer/12.svg' />
                    </Link>
                    <Link href='https://wa.me/628819080346'>
                        <Image className="transition duration-150 ease-in-out hover:-translate-y-2" alt="whatsapp" width={50} height={50} src='/footer/13.svg' />
                    </Link>
                    <Link href='https://www.instagram.com/mo.fikr/'>
                        <Image className="transition duration-150 ease-in-out hover:-translate-y-2" alt="instagram" width={50} height={50} src='/footer/14.svg' />
                    </Link>
                    <Link href='https://www.kisetsu.tech/'>
                        <Image className="transition duration-150 ease-in-out hover:-translate-y-2" alt="kisetsu" width={50} height={50} src='/footer/15.svg' />
                    </Link>
                </div>
                <div className="font-st">
                    <p>Copyright ©  Kisetsu Tech {year}</p>
                </div>
            </div>
        </div>
    )
}
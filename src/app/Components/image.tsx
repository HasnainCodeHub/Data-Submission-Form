// components/BackgroundImageComponent.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';

const BackgroundImageComponent: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className='text-4xl font-bold'>Developed By</h1>
            <h1 className='text-2xl font-bold font-serif'>Hasnain Ali</h1>
            <button className="h-12 sm:h-16 w-32 sm:w-48 bg-black rounded-xl text-white text-lg sm:text-xl md:text-2xl font-serif mt-2 transition-transform duration-300 hover:scale-110">
                <Link href="https://my-portfolio-next-js-7olh.vercel.app/" target="_blank">
                    My Portfolio
                </Link>
            </button>

            {/* Background Image Section */}
            <div className="relative w-full max-w-[450px] h-[650px] mt-4">
                <Image
                    src="/my.JPG" // Path to your image
                    alt="Background Image"
                    layout="fill" // Fill the parent div
                    objectFit="cover" // Cover the area
                    className="rounded-xl" // Optional: for rounded corners
                />
            </div>

            <div className="flex justify-center mt-4">
                <FaGithubSquare
                    size={65}
                    className="ml-4 transition-transform duration-300 ease-out hover:scale-125"
                />
                <button className="h-12 sm:h-16 w-32 sm:w-48 bg-black rounded-xl text-white text-lg sm:text-xl md:text-2xl font-serif mt-2 transition-transform duration-300 hover:scale-110">
                    <Link href="https://github.com/HasnainCodeHub" target="_blank">
                        Github Account
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default BackgroundImageComponent;

import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials'


const Header = () => {
  return <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        <Link href={'/'}>
        {/* <Image alt='logo' src={'/logo.svg'} width={220} height={48} priority={true}/> */}
        <h3 className="h-[34px] w-[270px] font-bold font-serif text-4xl">Toseef
          <span className="text-xl font-thin font-mono "> Akhtar</span><span className="text-accent">.</span>
        </h3>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;

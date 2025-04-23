import TopHeader from './TopHeader';
import NavBar from "./NavBar";

export default function Header() {

  return (
    <>
      
        <header className="bg-white sticky top-0 z-[9999999]">
          <TopHeader />
          <NavBar />
        </header>
     
    </>
  );
}

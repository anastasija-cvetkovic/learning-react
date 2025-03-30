export default function Navbar({logo}){
  return(
  <>
    <header>
      <nav>
        <img src={logo} />
        <span>ReactFacts</span>
      </nav>
    </header>
  </>
  );
}
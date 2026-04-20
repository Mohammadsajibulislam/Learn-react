function Navbar(props) {
  return (
    <nav style={{borderBottom: "2px solid black"}}>
      <h2>{props.title}</h2>
    </nav>
  );
}
export default Navbar;
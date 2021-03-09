function Header({ text }) {
  const h1Style = { fontFamily: "Arial" };
  return <h1 style={h1Style}> {text}</h1>;
}

export default Header;

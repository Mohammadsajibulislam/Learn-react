function Hero(props) {
  return (
    <div style={{borderBottom: "2px solid black"}}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Hero;
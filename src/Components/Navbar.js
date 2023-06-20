const Navbar = () => {
  let myName = "";
  console.log(myName);
  let a = 2;
  let b = 5;
  if (a + b > 10) {
    myName = "Harshita";
  } else {
    myName = "Tanya";
  }
  return (
    <>
      <h1 style={{ color: "red" }}>This is {myName}</h1>
    </>
  );
};

export default Navbar;

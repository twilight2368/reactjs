export default function Welcome(){
    return (
      <>
        <div>
          <img
            src={require("../img/JoyfulBurgerLogo.webp")}
            alt=""
            className=" m-5 display: inline-block"
          />
          <span className=" text-8xl text-rose-600">
            Welcome to Joyfull Burger
          </span>
        </div>
      </>
    );
}
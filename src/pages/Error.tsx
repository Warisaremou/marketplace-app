import { Link } from "react-router-dom";
import ErrorSvg from "../assets/svg/error2.svg";

function Error() {
  return (
    <div className="md:max-w-2xl pt-8 md:pt-20 pb-10 mx-auto flex justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-color">Page introuvable !</h1>
        <img src={ErrorSvg} alt="Error" className="w-64 md:w-96 my-10 mx-auto" />
        <p className="text-sm md:text-base mb-2 text-gray-600">
          Il semblerais que la page que vous recherchée n'existe pas !
        </p>
        <Link to="/home" className="text-sm md:text-base text-blue-color">
          Accédez à l'acceuil
        </Link>
      </div>
    </div>
  );
}

export default Error;

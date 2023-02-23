import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { confirmEmail } from "../services/authentication/confirmEmail";
import { CheckIcon } from "@heroicons/react/20/solid";

function ConfirmMailRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(location.pathname.substring(15));
    const hash = location.pathname.substring(15);
    confirmEmail(hash)
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-28 text-center">
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <h1 className="text-xl font-medium">Votre e-mail a été confirmer avec succès !</h1>
      </div>
      <p className="text-sm pt-2 text-gray-600">
        Vous allez être redirigé vers la page de connexion dans 3 secondes.
      </p>
    </div>
  );
}

export default ConfirmMailRoute;

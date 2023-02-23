import { UserLogged } from "../context/UserLoggedContext";
import mailBox from "../assets/svg/MailBox.svg";

function EmailConfirm() {
  const { registerMail } = UserLogged();

  return (
    <>
      <div className="flex justify-center py-12 mx-7 sm:mx-2 lg:px-8">
        <div className=" space-y-8">
          <img src={mailBox} alt="mailbox-svg" className="w-40 md:w-72 my-10 mx-auto" />
          <div>
            <h2 className="my-4 text-center text-lg md:text-3xl font-semibold tracking-tight text-gray-700">
              Confirmer votre adresse email
            </h2>
            <p className="mt-2 text-sm text-center md:text-lg text-gray-600">
              Un mail de confirmation a été envoyé à l'adresse
              <span className="text-blue-color pl-1">{registerMail}</span>
            </p>
            <p className="mt-2 text-sm text-justify md:text-lg text-gray-600">
              Vérifier votre boîte de réception et cliquez sur le lien de confirmation pour
              continuer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailConfirm;

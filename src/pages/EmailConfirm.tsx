import { UserLogged } from "../context/UserLoggedContext";

function EmailConfirm() {
  const { registerMail } = UserLogged();

  return (
    <>
      <div className="flex justify-center py-12 sm:px-2 lg:px-8">
        <div className="max-w-lg space-y-8">
          <div>
            <h2 className="mt-6 mb-2 text-center text-xl md:text-3xl font-bold tracking-tight text-gray-900">
              Vérifier votre adresse e-mail
            </h2>
            <p className="mt-2 text-center md:text-lg text-gray-600">
              Un mail de confirmation vous a été envoyé à l'adresse{" "}
              <span className="font-semibold">{registerMail}</span> <br />
              Merci de confirmer votre email avant de poursuivre.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailConfirm;

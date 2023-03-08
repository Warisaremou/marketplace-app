import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLoggedContext } from "../context/LoaderContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authEmail } from "../services/authentication/authEmail";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Loader from "../utils/Loader";
import { Google, Facebook } from "react-bootstrap-icons";
import authImg from "../assets/images/auth-side-img.jpg";
import clsx from "clsx";

const schema = z
  .object({
    email: z.string().email("Adresse mail requis "),
    password: z.string().min(8, "Mot de passe requis"),
    accept: z.literal(true, {
      errorMap: () => ({ message: "Veuillez cocher cette boîte !" }),
    }),
  })
  .required();

function Login() {
  const { loader, setLoader } = UserLoggedContext();
  const [isError, setIsError] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setLocalStorage } = useLocalStorage();

  const authSocialLink = [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Google",
      href: "#",
      icon: Google,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoader(true);
    authEmail(data.email, data.password)
      .then((res) => {
        setLoader(false);
        setLocalStorage("accessToken", res.data?.token);
        navigate("/home");
        window.location.reload();
      })
      .catch((error) => {
        // console.log(error);
        // console.log(error.response.data.errors);
        setIsError(error.response.data.errors);
        setLoader(false);
      });
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-1 flex-col mx-auto justify-center py-16 sm:py-6 lg:py-[65px] px-4 md:px-10 lg:flex-none lg:px-14 xl:px-44">
          <div>
            <h2 className="pb-2 pt-2 md:pt-0 text-xl font-semibold text-gray-600">
              Connectez-vous
            </h2>
            <p className="text-sm text-gray-500">
              Renseignez vos identifiants pour accéder à votre compte.
            </p>
          </div>

          <div className="mt-0">
            <div className="py-5 px-0 sm:rounded-lg sm:px-0">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Votre email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="utilisateur@gmail.com"
                      className="form-input"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && <small className="errors">{`${errors.email?.message}`}</small>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Votre mot de passe
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      autoComplete="current-password"
                      className="form-input"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <small className="errors">{`${errors.password?.message}`}</small>
                  )}
                </div>

                <div>
                  {(isError.email || isError.password) && (
                    <small className="errors">Adresse mail ou mot de passe invalide !</small>
                  )}
                </div>

                <div className="flex items-center justify-between text-[14px] md:text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className=" sm:h-4 sm:w-4 border-gray-300 text-blue-color focus:blue-color cursor-pointer rounded"
                      {...register("accept")}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-gray-600 font-medium">
                      Se souvenir de moi
                    </label>
                  </div>
                  <div>
                    <Link to="#" className="text-blue-color">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                </div>
                {errors.accept && <small className="errors">{`${errors.accept?.message}`}</small>}

                <div>
                  <button type="submit" className="valide-form-btn">
                    {loader ? <Loader /> : "Se connecter"}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {authSocialLink.map((item) => (
                    <div key={item.name}>
                      <Link to={`${item.href}`} className="link-form-auth">
                        <span className="sr-only">{`Sign in with ${item.name}`}</span>
                        <item.icon
                          className={clsx(
                            "h-5 w-5",
                            item.name == "Facebook" ? "text-blue-color" : "text-red-500"
                          )}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-center pt-5">
                Vous n'avez pas de compte ?
                <Link to="/register" className="pl-1 text-blue-color">
                  Inscrivez-vous
                </Link>
              </p>
              <Link to="/home" className="text-blue-color text-sm flex justify-center pt-3">
                Accéder à l'acceuil
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 md:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={authImg}
            alt="register-side-img"
          />
        </div>
      </div>
    </>
  );
}

export default Login;

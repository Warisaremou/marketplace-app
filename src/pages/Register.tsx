import { Google, Facebook } from "react-bootstrap-icons";
import Loader from "../utils/Loader";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserLogged } from "../context/UserLoggedContext";
import { UserLoggedContext } from "../context/LoaderContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import authImg from "../assets/images/auth-side-img.jpg";
import { clsx } from "clsx";
import { registerUser } from "../services/authentication/register";
import { useState } from "react";

const schema = z
  .object({
    lastName: z.string().min(3, "Entrez votre nom !"),
    firstName: z.string().min(3, "Entrez votre prenom !"),
    username: z.string().min(3, "Entrez votre nom d'utilisateur !"),
    email: z.string().email("Email requis !"),
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au minimum 8 caractères !")
      .max(20, "Le mot de passe doit contenir au maximum 20 caractères !"),
    cPassword: z.string(),
    accept: z.literal(true, {
      errorMap: () => ({ message: "Veuillez accepter les conditions générales !" }),
    }),
  })
  .required()
  .refine((data) => data.password === data.cPassword, {
    message: "Les mots de passe ne sont pas identiques !",
    path: ["cPassword"],
  });

function Register() {
  const { loader, setLoader } = UserLoggedContext();
  const [isError, setIsError] = useState({ email: "" });
  const { setRegisterMail } = UserLogged();
  const navigate = useNavigate();

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
    setRegisterMail(data.email);

    registerUser(data)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setLoader(false);
          navigate("/confirm-email");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setIsError(error.response.data.errors);
        setLoader(false);
      });
  };

  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-8 md:py-6 px-4 md:px-6 lg:flex-none lg:px-16 xl:px-44">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="pb-2 text-xl font-semibold text-gray-600">
                Démarrer avec <span className="text-blue-color">MARKET</span>
              </h2>
              <p className="text-sm text-gray-500">
                Créez votre compte et commercialisez vos articles
              </p>
            </div>

            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="py-5 px-0 sm:rounded-lg sm:px-0">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  {/* Lastname input */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Votre nom
                    </label>
                    <div className="mt-1">
                      <input type="text" className="form-input" {...register("lastName")} />
                    </div>
                    {errors.lastName && (
                      <small className="errors">{`${errors.lastName?.message}`}</small>
                    )}
                  </div>

                  {/* Firstname input */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Votre prénom
                    </label>
                    <div className="mt-1">
                      <input type="text" className="form-input" {...register("firstName")} />
                    </div>
                    {errors.firstName && (
                      <small className="errors">{`${errors.firstName?.message}`}</small>
                    )}
                  </div>

                  {/* Username input */}
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Votre nom d'utilisateur
                    </label>
                    <div className="mt-1">
                      <input type="text" className="form-input" {...register("username")} />
                    </div>
                    {errors.username && (
                      <small className="errors">{`${errors.username?.message}`}</small>
                    )}
                  </div>

                  {/* Mail input */}
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
                    {isError.email && <small className="errors">{`${isError.email}`}</small>}
                  </div>

                  {/* Password input */}
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

                  {/* Password-confirm input */}
                  <div>
                    <label htmlFor="cPassword" className="block text-sm font-medium text-gray-700">
                      Répéter mot de passe
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        autoComplete="current-password"
                        className="form-input"
                        {...register("cPassword")}
                      />
                    </div>
                    {errors.cPassword && (
                      <small className="errors">{`${errors.cPassword?.message}`}</small>
                    )}
                  </div>

                  <div className="text-[13px] md:text-sm">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-blue-color focus:blue-color cursor-pointer rounded"
                        {...register("accept")}
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-gray-900 font-medium">
                        J'accepte les
                        <Link to="/" className="pl-1 text-blue-color hover:underline">
                          termes et conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  {errors.accept && <small className="errors">{`${errors.accept?.message}`}</small>}

                  <div>
                    <button type="submit" className="valide-form-btn">
                      {loader ? <Loader /> : "S'inscrire"}
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Ou créer un compte avec</span>
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
                <p className="text-sm text-center pt-10 md:pt-5">
                  Vous avez déjà un compte ?
                  <Link to="/login" className="pl-1 text-blue-color">
                    Connectez-vous
                  </Link>
                </p>
                <Link to="/home" className="text-blue-color text-sm flex justify-center pt-3">
                  Accéder à l'acceuil
                </Link>
              </div>
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

export default Register;

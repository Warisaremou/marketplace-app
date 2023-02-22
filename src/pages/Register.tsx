import { Google, Facebook } from "react-bootstrap-icons";
import Loader from "../utils/Loader";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoggedContext } from "../context/LoaderContext";
import { Link } from "react-router-dom";
import authImg from "../assets/images/auth-side-img.jpg";

const schema = z
  .object({
    lastName: z.string().min(3, "Entrez votre nom !"),
    firstName: z.string().min(3, "Entrez votre prenom !"),
    username: z.string().min(3, "Entrez votre nom d'utilisateur !"),
    email: z.string().email("Email invalide !"),
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au minimum 8 caractères !")
      .max(20, "Le mot de passe doit contenir au maximum 20 caractères"),
    cPassword: z.string(),
    accept: z.literal(true, {
      errorMap: () => ({ message: "Vous devez accepter les termes et conditions" }),
    }),
  })
  .required()
  .refine((data) => data.password === data.cPassword, {
    message: "Les mots de passe ne sont pas identiques !",
    path: ["cPassword"],
  });

function Register() {
  const { loader, setLoader } = UserLoggedContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoader(true);
    console.log(data);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-10 xl:px-36">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2 className="text-center text-2xl font-medium tracking-tight text-gray-700">
              Créez votre compte
            </h2>

            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="py-5 px-2 sm:rounded-lg sm:px-5">
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
                      Votre nom d&apos;utilisateur
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
                        className="h-4 w-4 rounded border-gray-300 text-blue-color focus:blue-color"
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
                      <span className="bg-white px-2 text-gray-500">Ou créer un compte avec</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <Link to="#" className="link-form-auth">
                        <span className="sr-only">Sign in with Facebook</span>
                        <Facebook className="w-5 h-5" />
                      </Link>
                    </div>

                    <div>
                      <Link to="#" className="link-form-auth">
                        <span className="sr-only">Sign in with Google</span>
                        <Google className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center pt-10 md:pt-5">
                  Vous avez déjà un compte ?
                  <Link to="/login" className="pl-1 text-blue-color">
                    Se connecter
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
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

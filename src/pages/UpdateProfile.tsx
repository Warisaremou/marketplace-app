import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getAllCountries } from "../services/countries/getAllCountries";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogged } from "../context/UserLoggedContext";
import { Link } from "react-router-dom";
import { LinkIcon } from "@heroicons/react/24/outline";

const schema = z.object({
  lastName: z.string().min(3, "Entrez votre nom !"),
  firstName: z.string().min(3, "Entrez votre prenom !"),
  username: z.string().min(3, "Entrez votre nom d'utilisateur !"),
  country: z.string().min(3, "Entrez le nom du pays !"),
  address: z.string().min(5, "Adresse invalide !"),
  socialLink: z.string().min(5, "Ajoutez un lien !"),
  phone: z
    .string()
    .min(8, "Numéro de téléphone invalide !")
    .transform((value) => Number(value)),
  description: z
    .string()
    .min(10, "La bio doit contenir au minimum 10 caractères !")
    .max(100, "La bio doit contenir au maximum 200 caractères !"),
});

function UpdateProfile() {
  const { meData } = UserLogged();
  const [allCountries, setAllCountries] = useState<{ name: string }[]>([]);
  // console.log(meData);

  useEffect(() => {
    getAllCountries()
      .then((res) => {
        setAllCountries(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 pb-20">
      <div>
        <h3>Modifier votre profile</h3>
      </div>
      <form onSubmit={handleSubmit(onsubmit)} className="border-t border-gray-200">
        {/* lastName input */}
        <div>
          <div className="bg-gray-50 py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Nom</label>
            <div className="sm:col-span-2">
              <input
                type="text"
                className="form-input"
                {...register("lastName")}
                placeholder="Nom"
                defaultValue={`${meData.lastName ? meData.lastName : ""}`}
              />
              {errors.lastName && <small className="errors">{`${errors.lastName?.message}`}</small>}
            </div>
          </div>
        </div>

        {/* firstName input */}
        <div>
          <div className="bg-white py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Prenom</label>
            <div className="sm:col-span-2">
              <input
                type="text"
                className="form-input"
                {...register("firstName")}
                placeholder="Prénom"
                defaultValue={`${meData.firstName ? meData.firstName : ""}`}
              />
              {errors.firstName && (
                <small className="errors">{`${errors.firstName?.message}`}</small>
              )}
            </div>
          </div>
        </div>

        {/* username input */}
        <div>
          <div className="bg-gray-50 py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Nom d'utilisateur</label>
            <div className="sm:col-span-2">
              <input
                type="text"
                className="form-input"
                {...register("username")}
                placeholder="Nom d'utilisateur"
                defaultValue={`${meData.username ? meData.username : ""}`}
              />
              {errors.username && <small className="errors">{`${errors.username?.message}`}</small>}
            </div>
          </div>
        </div>

        {/* country input */}
        <div>
          <div className="bg-gray-50 py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Pays</label>
            <div className="sm:col-span-2">
              <select className="form-input" {...register("country")}>
                {meData.country && <option value={meData.country}>{meData.country}</option>}
                {allCountries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && <small className="errors">{`${errors.country?.message}`}</small>}
            </div>
          </div>
        </div>

        {/* phone input */}
        <div>
          <div className="bg-gray-50 py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Numéro de téléphone</label>
            <div className="sm:col-span-2">
              <input
                type="number"
                className="form-input"
                {...register("phone")}
                placeholder="Numéro de téléphone"
                defaultValue={`${meData.phone ? meData.phone : ""}`}
                min={1}
              />
              {errors.phone && <small className="errors">{`${errors.phone?.message}`}</small>}
            </div>
          </div>
        </div>

        {/* adress input */}
        <div>
          <div className="bg-white py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Adresse</label>
            <div className="sm:col-span-2">
              <input
                type="text"
                className="form-input"
                {...register("address")}
                placeholder="Adresse"
                defaultValue={`${meData.address ? meData.address : ""}`}
              />
              {errors.address && <small className="errors">{`${errors.address?.message}`}</small>}
            </div>
          </div>
        </div>

        {/* socialLink input */}
        <div>
          <div className="bg-white py-2 sm:grid sm:grid-cols-3 items-center">
            <label className="text-sm font-medium text-gray-500">Lien</label>
            <div className="sm:col-span-2">
              <div className="border border-gray-300 rounded-md flex items-center bg-gray-300">
                <LinkIcon className="w-12 h-5 stroke-gray-500" />
                <input
                  type="text"
                  className="link-form-input"
                  {...register("socialLink")}
                  placeholder="lien"
                  defaultValue={`${meData.socialLink ? meData.socialLink : ""}`}
                />
              </div>
              {errors.socialLink && (
                <small className="errors">{`${errors.socialLink?.message}`}</small>
              )}
            </div>
          </div>
        </div>

        {/* description input */}
        <div>
          <div className="bg-white py-2 sm:grid sm:grid-cols-3">
            <label className="text-sm font-medium text-gray-500">Description </label>
            <div className="sm:col-span-2">
              <textarea
                placeholder="A propos de vous"
                rows={4}
                {...register("description")}
                className="text-area-input"
                defaultValue={`${meData.description ? meData.description : ""}`}
              />
              {errors.description && (
                <small className="errors">{`${errors.description?.message}`}</small>
              )}
            </div>
          </div>
        </div>

        {/* profile picture */}
        <div className="bg-white py-2 sm:grid sm:grid-cols-3">
          <label className="text-sm font-medium text-gray-500">Photo de profile </label>
          <div className="space-y-1 text-center rounded-md border-2 border-dashed border-gray-300 py-5 sm:col-span-2">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-center text-gray-500 pb-1">
              <label
                htmlFor="file-upload"
                className="text-[11px] relative cursor-pointer rounded focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-color focus-within:ring-offset-2"
              >
                <input
                  id="file-upload"
                  type="file"
                  className="text-gray-500 font-medium focus:ring-0 cursor-pointer"
                  //   onChange={(e) => handleFileChange(e)
                  //   }
                />
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white py-2 sm:grid sm:grid-cols-3 mt-5">
          <div className="flex gap-5 col-start-3">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-sm border border-transparent bg-blue-color px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-dark-color focus:outline-none focus:ring-2 focus:ring-blue-dark-color focus:ring-offset-2 sm:col-start-2 sm:text-sm"
            >
              Modifier
            </button>
            <Link
              to={`/profile/${meData.id}`}
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-dark-color focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
            >
              Annuler
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;

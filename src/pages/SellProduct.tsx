import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserLoggedContext } from "../context/LoaderContext";
import CoverPhoto from "../utils/CoverPhoto";
import Loader from "../utils/Loader";

const schema = z
  .object({
    name: z.string().min(1, "Veuillez entrer le nom du produit !"),
    mark: z.string().min(1, "Veuillez entrer la marque du produit !"), //Au moins 30 mots
    price: z
      .string()
      .min(1, "Veuillez entrer le prix du produit !")
      .transform((value) => Number(value)),
    quantity: z
      .string()
      .min(1, "Veuillez entrer la quantite du produit !")
      .transform((value) => Number(value)),
    category: z.string().min(1, "Renseignez la catégorie du produit !"),
    status: z.string().min(1, "Renseignez l'état du produit !"),
    description: z
      .string()
      .min(30, "Veuillez décrire votre produit !")
      .max(200, "La description du produit doit contenir au maximum 200 caractères !"),
  })
  .required();

function SellProduct() {
  const { loader, setLoader } = UserLoggedContext();
  const navigate = useNavigate();
  const imageNumber: number[] = [1, 2, 3];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoader(true);

    setTimeout(() => {
      console.log(data);
      setLoader(false);
    }, 3000);
  };

  return (
    <form className="px-4 md:px-20 bg-gray-100 pb-20" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl font-medium py-4">Vendez votre produit</h1>
      <div className="py-4 md:py-10 px-1 md:px-8 bg-white text-xs md:text-base">
        <p className="text-gray-500">Ajoutez trois photos de votre produit</p>
        <div className="grid lg:grid-cols-3  gap-5">
          {imageNumber.map((number) => (
            <div key={number}>
              <CoverPhoto />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 py-3 md:py-10 px-1 md:px-8 bg-white text-xs md:text-base">
        <div className="flex flex-col md:flex-row justify-between md:pb-5">
          <div className="md:w-full pb-4 md:pb-0">
            <div>
              <label className="text-gray-600 mb-2 block">Nom du produit</label>
              <input type="text" className="form-input" {...register("name")} />
            </div>
            {errors.name && <small className="errors">{`${errors.name?.message}`}</small>}
          </div>
          <div className="md:w-full md:pl-5 pb-4 md:pb-0">
            <div>
              <label className="text-gray-600 mb-2 block">Marque du produit</label>
              <input type="text" className="form-input" {...register("mark")} />
            </div>
            {errors.mark && <small className="errors">{`${errors.mark?.message}`}</small>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-full pb-4 md:pb-0">
            <div>
              <label className="text-gray-600 mb-2 block">Prix de vente</label>
              <input type="number" className="form-input" min={1} {...register("price")} />
            </div>
            {errors.price && <small className="errors">{`${errors.price?.message}`}</small>}
          </div>
          <div className="md:w-full md:pl-5 pb-4 md:pb-0">
            <div>
              <label className="text-gray-600 mb-2 block">Quantité</label>
              <input type="number" className="form-input" min={1} {...register("quantity")} />
            </div>
            {errors.quantity && <small className="errors">{`${errors.quantity?.message}`}</small>}
          </div>
        </div>
      </div>

      <div className="mt-5 py-3 md:py-10 px-1 md:px-8 bg-white text-xs md:text-base">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-full">
            <div className="pb-4 md:pb-5">
              <div className="mb-2 block">
                <label className="text-gray-600 mb-2 block">Catégorie</label>
              </div>
              <select id="category" {...register("category")} className="select-input">
                {/* <option value="">Selectionez la categorie</option>
                {allCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))} */}
                <option value="vetements">Vêtements</option>
                <option value="t-shirt">T-Shirt</option>
              </select>
              {errors.category && (
                <small className="errors block pt-3">{`${errors.category?.message}`}</small>
              )}
            </div>
            <div className="pb-4 md:pb-0">
              <div className="mb-2 block">
                <label className="text-gray-600 mb-2 block">Etat du produit</label>
              </div>
              <select {...register("status")} className="select-input">
                <option value="Neuf">Neuf</option>
                <option value="Utilise">Utilisé</option>
              </select>
              {errors.status && <small className="errors">{`${errors.status?.message}`}</small>}
            </div>
          </div>
          <div className="md:w-full md:pl-5 pb-4 md:pb-0">
            <div className="mb-2 block">
              <label className="text-gray-600 mb-2 block">Description du produit</label>
            </div>
            <textarea
              placeholder="Description du produit"
              rows={5}
              {...register("description")}
              className="text-area-input"
            />
            {errors.description && (
              <small className="errors">{`${errors.description?.message}`}</small>
            )}
          </div>
        </div>
      </div>

      <button className="button" type="submit">
        {loader ? (
          <Loader />
        ) : (
          <>
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Vendre mon produit</span>
            </span>
          </>
        )}
      </button>
    </form>
  );
}

export default SellProduct;

import React from "react";

function SellProduct() {
  return (
    <div className="px-4 md:px-20 bg-gray-100 pb-20">
      <h1>Vendez un produit</h1>
      <div className="py-3 px-1 bg-white">
        <p className="text-sm text-gray-500">Ajoutez trois images ou photos de votre produit</p>
        <input type="file" name="" className="pt-4 text-xs md:text-sm" />
        <input type="file" name="" className="pt-4 text-xs md:text-sm" />
        <input type="file" name="" className="pt-4 text-xs md:text-sm" />
      </div>

      <div className="mt-5 py-3 px-1 bg-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-full pb-4 md:pb-0">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Nom du produit</label>
              <input
                type="text"
                className="form-input text-xs"
                // {...register("name")}
              />
            </div>
          </div>
          <div className="md:w-80 md:pl-5 pb-4 md:pb-0">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Marque du produit</label>
              <input
                type="text"
                className="form-input text-xs"
                // {...register("mark")}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-80 pb-4 md:pb-0">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Prix de vente</label>
              <input
                type="number"
                className="form-input text-xs"
                min={0}
                // {...register("price")}
              />
            </div>
          </div>
          <div className="md:w-80 md:pl-5">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Quantité</label>
              <input
                type="number"
                className="form-input text-xs"
                min={0}
                // {...register("quantity")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 py-3 px-1 bg-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-80">
            <div>
              <div className="mb-2 block">
              <label className="text-sm text-gray-600 mb-2 block">Catégorie</label>
              </div>
              {/* <select
                id="category"
                {...register("category")}
                className="border border-gray-300 w-full md:w-80 bg-gray-50 rounded-md text-sm "
              >
                <option value="">Selectionez la categorie</option>
                {allCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select> */}
              {/* {errors.category && (
                <small className="errors block pt-3">{`${errors.category?.message}`}</small>
              )} */}
            </div>
            <div>
              <div className="mb-2 block">
              <label className="text-sm text-gray-600 mb-2 block">Etat du produit</label>
              </div>
              {/* <Select id="status" {...register("status")}>
                <option>Neuf</option>
                <option>Utilise</option>
              </Select> */}
              {/* {errors.status && <small className="errors">{`${errors.status?.message}`}</small>} */}
            </div>
          </div>
          <div className="md:w-80 md:pl-5">
            <div className="mb-2 block">
            <label className="text-sm text-gray-600 mb-2 block">Description du produit</label>
            </div>
            <textarea
              placeholder="Description du produit"
              rows={5}
              // {...register("description")}
              className="text-area-input text-sm"
            />
            {/* {errors.description && (
              <small className="errors">{`${errors.description?.message}`}</small>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellProduct;

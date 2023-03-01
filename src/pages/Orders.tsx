import React from "react";

const orders = [
  {
    number: "WU88191111",
    date: "12 janvier 2022",
    datetime: "12-01-2022",
    invoiceHref: "#",
    total: "23850 FCFA",
    products: [
      {
        id: 1,
        name: "Stylo usiné",
        href: "#",
        price: "2500 FCFA",
        status: "Délivré le 16-01-2022",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
        imageAlt: "img",
      },
      {
        id: 2,
        name: "Micro-sac à dos",
        href: "#",
        price: "4000 FCFA",
        status: "Délivré le 16-01-2022",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        imageAlt: "img",
      },
    ],
  },
];

function Orders() {
  return (
    <div className="px-4 md:px-20">
      <h1 className="text-xl md:text-2xl pt-2 font-bold tracking-tight text-gray-700">
        Historique des Commandes
      </h1>
      <div className="mx-auto max-w-7xl pt-2 mb-24 md:mb-0 md:py-2">
        <div className="mt-16">
          <div className="space-y-20">
            {orders.map((order) => (
              <div key={order.number}>
                <div className="rounded-lg bg-gray-100 py-5 px-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:px-3 lg:space-x-2">
                  <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-xs md:text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between sm:block">
                      <dt className="font-medium text-gray-500">Date de prise d'ordre</dt>
                      <dd className="sm:mt-1">
                        <time dateTime={order.date}>{order.datetime}</time>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-6 sm:block sm:pt-0">
                      <dt className="font-medium text-gray-500">Numéro de commande</dt>
                      <dd className="sm:mt-1">{order.number}</dd>
                    </div>
                    <div className="flex justify-between pt-6 font-medium text-gray-500 sm:block sm:pt-0">
                      <dt>Montant total</dt>
                      <dd className="sm:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  {/* <a
                      href={order.invoiceHref}
                      className="text-xs md:text-sm mt-6 flex w-full items-center justify-center rounded-md  bg-red-500 py-2 px-4 font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                    >
                      Annuler
                    </a> */}
                </div>

                <table className="mt-4 w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                    <tr>
                      <th scope="col" className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">
                        Produit
                      </th>
                      <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
                        Prix
                      </th>
                      <th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                        Status
                      </th>
                      <th scope="col" className="w-0 py-3 text-right font-normal">
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="py-6 pr-8">
                          <div className="flex items-center">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="mr-6 h-16 w-16 rounded object-cover object-center"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="mt-1 sm:hidden">{product.price}</div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{product.price}</td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{product.status}</td>
                        <td className="whitespace-nowrap py-6 text-right font-medium text-xs md:text-sm">
                          <a href={product.href} className="text-blue-color">
                            Voir<span className="hidden lg:inline pl-1">le produit</span>
                            <span className="sr-only">, {product.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;

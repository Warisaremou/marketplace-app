import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

function SideCategoriesFilter({ categories }: { categories: any }) {
  const [openCategories, setOpenCategories] = useState<[]  >([]);

  return (
    <>
      <div className="mt-4 md:mt-0 py-4 md:py-0 text-sm lg:text-xs xl:text-sm">
        {categories.map((category: any) => (
          <Disclosure
            as="div"
            key={category.id}
            className={clsx(
              "border-t border-gray-200 px-4 py-6",
              category.id === 1 && "border-t-0"
            )}
          >
            {({ open }) => (
              <div>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-600">{category.name}</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                {category.children.length > 0 && (
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-3">
                      {category.children.map((categoryChildren: any) => (
                        <div key={categoryChildren.id} className="ml-6 ">
                          <div className="flex items-center gap-3">
                            {/* {categoryChildren.children.length <= 0 && ( */}
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            {/* )} */}
                            <label className="min-w-0 flex-1 text-gray-500">
                              {categoryChildren.name}
                            </label>
                            {categoryChildren.children.length > 0 && (
                              <Disclosure.Button className="text-gray-400 hover:text-gray-500">
                                <span className=" flex items-center">
                                  {open ? (
                                    <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <ChevronDownIcon
                                      className="h-5 w-5 fill-gray"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            )}
                          </div>

                          {categoryChildren.children.map((categoryChildrenChildren: any) => (
                            <div
                              key={categoryChildrenChildren.id}
                              className="ml-6 flex items-center gap-3 pt-4"
                            >
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label className="min-w-0 flex-1 text-gray-500">
                                {categoryChildrenChildren.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                )}
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  );
}

export default SideCategoriesFilter;

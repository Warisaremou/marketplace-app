import { clsx } from "clsx";

type steperProps = {
  formArray: [];
  formNo: number;
};

export default function Steper({ formArray, formNo }: steperProps) {
  // console.log(formNo);

  return (
    <div className="pt-10">
      <nav className="flex items-center justify-center" aria-label="Progress">
        <p className="text-sm font-medium">
          Etape {formNo} sur {formArray.length}
        </p>
        <div className="ml-8 flex items-center space-x-5">
          {/* {formArray.map((step: any, index: any) => (
            <li key={`${step}-${index}`}>
              {formNo == index ? (
                // current step
                <p className="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
                  <span className="sr-only"></span>
                  {console.log(formNo, index, step)}
                </p>
              ) : formNo - 1 == index ? (
                // previous step
                <p className="relative flex items-center justify-center" aria-current="step">
                  <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                    <span className="h-full w-full rounded-full bg-indigo-200" />
                  </span>
                  <span
                    className="relative block h-2.5 w-2.5 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="sr-only"></span>
                </p>
              ) : (
                // upcoming step
                <p className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                  <span className="sr-only"></span>
                </p>
              )}
            </li>
          ))} */}
          {formArray.map((step: any, index: any) => (
            <p
              key={`${step}-${index}`}
              className={clsx(
                "block h-2.5 w-2.5 rounded-full",
                formNo - 1 === index || formNo - 1 === index + 1 || formNo === formArray.length
                  ? "bg-blue-color"
                  : "bg-gray-200"
              )}
            ></p>
          ))}
        </div>
      </nav>
    </div>
  );
}

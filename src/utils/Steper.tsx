import { clsx } from "clsx";

type steperProps = {
  formArray: number[];
  formNo: number;
};

export default function Steper({ formArray, formNo }: steperProps) {
  // console.log(formNo);

  return (
    <div className="md:pt-10 mb-20 md:mb-10">
      <nav className="flex items-center justify-center" aria-label="Progress">
        <p className="text-sm font-medium">
          Etape {formNo} sur {formArray.length}
        </p>
        <div className="ml-8 flex items-center space-x-5">
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

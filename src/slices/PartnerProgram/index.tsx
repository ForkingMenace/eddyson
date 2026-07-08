import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `PartnerProgram`.
 */
export type PartnerProgramProps =
  SliceComponentProps<Content.PartnerProgramSlice>;

/**
 * Component for "PartnerProgram" Slices.
 */
const PartnerProgram: FC<PartnerProgramProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-[100]"
    >
      <div className="container bg-[#212121] text-[#F8F8F8] pb-[57] pt-[70] rounded-2xl">
        <div className="max-w-[739] m-auto">
          <span className="border-2 border-[#ff8831] rounded-2xl p-1 text-sm">{slice.primary.topline}</span>
          <h2 className="font-normal text-[36px] leading-[140%] tracking-normal"> {slice.primary.headline} </h2>
          <p className="m-auto">{slice.primary.copy}</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-[70] px-[102]">
          {slice.primary.card.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-[#282828]"
            >
              <PrismicNextImage
                field={item.image}
                className="w-full h-[220] object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-[24px]">
                  {item.headline}
                </h3>

                <p className="mt-4 font-light text-[18px] leading-[140%] tracking-[0.02em]">
                  {item.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;

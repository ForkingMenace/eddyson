import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Expertise`.
 */
export type ExpertiseProps = SliceComponentProps<Content.ExpertiseSlice>;

/**
 * Component for "Expertise" Slices.
 */
const Expertise: FC<ExpertiseProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-[990] m-auto mt-[114]">
        <h2 className="font-bold text-[36px] leading-[140%] tracking-normal">{slice.primary.headline}</h2>
        <p className="font-light text-[36px] leading-[140%] tracking-normal">{slice.primary.copy}</p>
      </div>
      
      <div className="flex items-center gap-6  mt-[114]">
          <div className="h-px flex-1 bg-black"></div>
          <blockquote className="max-w-[737] text-display text-center font-normal text-[36px] leading-[140%] tracking-normal">{slice.primary.quote}</blockquote> 
          <div className="h-px flex-1 bg-black"></div>
      </div>

      <div className="mt-[114]">
        <div className="grid grid-cols-3 gap-8">
          {slice.primary.card.map((card) => (
            <div key={card.headline} className="relative h-[320] overflow-hidden rounded-xl">
              <PrismicNextImage field={card.image} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{card.headline}</h3>
                <p className="mt-2">{card.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

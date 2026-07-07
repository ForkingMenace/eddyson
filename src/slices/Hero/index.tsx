import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <h1 className="font-display max-w-[566] text-[62px] leading-[160%] tracking-normal"> {slice.primary.title} </h1>
      </div>
      <div className="bg-[#FF8831] mt-[62]">
        <div className="container pt-[109] pb-[81] flex relative">
          <div className="flex-1">
            <p className="font-medium text-[36px] leading-[100%] tracking-normal"> {slice.primary.topline} </p>
            <p className="max-w-[484] mt-4 mb-9 text-[18px] leading-[160%] tracking-[0.02em]"> {slice.primary.copy} </p>
            <a href="#" className="py-4 px-6 me-6 border-2 rounded-[8] font-medium text-[16px] leading-[100%] tracking-[0.02em]">  {slice.primary.cta_primary} </a>
            <a href="#" className="py-4 px-6 border-2 border-[#161616] bg-[#161616] text-[#F8F8F8] rounded-[8] font-medium text-[16px] leading-[100%] tracking-[0.02em]"> {slice.primary.cta_secondary} </a>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -bottom-12 left-14">
              <PrismicNextImage 
                field = {slice.primary.hero_image} 
                
              />
            </div>
          </div>
        </div>
      </div>
        <div className="bg-[#ECECEC] flex">
        <div className="m-auto">
          <PrismicNextImage field = { slice.primary.partner_logo_1 } />
        </div>
      </div>      
    </section>
  );
};

export default Hero;

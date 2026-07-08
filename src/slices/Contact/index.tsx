import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[url('/img/bottom-bg.png')] bg-cover bg-center mt-[198] pb-[175]"
    >

    
      <div className="container flex">
        <div className="flex-1">
          <div className="max-w-[612] mt-[115]">
            <h2 className="font-bold text-[36px] leading-[140%] tracking-normal mb-4">{ slice.primary.headline } </h2>
            <p className="font-light text-[36px] leading-[140%] tracking-normal text-[#474747]">{ slice.primary.copy }</p>
          </div>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow">
            <input type="text" placeholder="Full Name" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Company" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Business eMail" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Phone" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Partner Types" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Industry" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="System Focus" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Company" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <input type="text" placeholder="Questions or Comments" className="border border-[#D9D9D9] rounded-[8] px-4 py-3" />
            <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="h-5 w-5 accent-[#E46A1C]"
            />
            <span className="text-sm">
              By submitting this form, I agree with the privacy policy
            </span>
          </label>
            <button type="submit" className="w-full rounded-[8] bg-[#161616] px-6 py-4 text-white font-medium">Submit</button>
          </form>
        </div>
    
      </ div>


    </section>
  );
};

export default Contact;

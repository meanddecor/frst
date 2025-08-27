"use client";

import Image from "next/image";
import ServicesHero from "../components/ServiceHero";
import FAQ from "../components/faq";


export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <main className="min-h-screen bg-white -mt-20 pt-40 relative">
        <div className="absolute inset-0 bg-white -z-10"></div>
        <div className="px-4 pb-10">
          <div className="mx-auto w-full max-w-[914px]">
            {/* Header section */}
            <section className="relative grid gap-8 md:grid-cols-2 md:items-start">
              <div className="pt-2">
                <div>
                  <h1 className="text-[#0D0D0D] text-[42px] leading-[48px] font-normal md:text-[54.84px] md:leading-[63px]">
                    Book an intro <br /> with our team
                  </h1>
                </div>
                <p className="mt-6 text-[#0D0D0D] text-[14.88px] leading-[23.2px] tracking-[0.32px]">
                  Connect with Darkroom to learn more about the top paid media agency and
                  amazon marketing agency. Book an intro to learn more about our growth
                  services.
                </p>
              </div>
              <div className="flex justify-center md:block md:-mt-[50px] md:ml-[497px]">
                <Image
                  src="https://placehold.co/470x376"
                  alt="Team intro visual"
                  width={500}
                  height={400}
                  className="w-[500px] h-[400px] md:w-[470px] md:h-[376px] object-cover"
                  priority
                />
              </div>
            </section>

            {/* Form section */}
            <section className="mt-2">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div className="relative">
                  <label 
                    htmlFor="name"
                    className="absolute left-4 top-3 text-[#454545] text-[15.75px] leading-[19.2px]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[15.75px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    required
                    aria-describedby="name-error"
                  />
                  <div id="name-error" className="sr-only" role="alert"></div>
                </div>

                {/* Email */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="email"
                    className="absolute left-4 top-3 text-[#454545] text-[15.88px] leading-[19.2px]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[16px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    required
                    aria-describedby="email-error"
                  />
                  <div id="email-error" className="sr-only" role="alert"></div>
                </div>

                {/* Phone */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="phone"
                    className="absolute left-4 top-3 text-[#454545] text-[15.88px] leading-[19.2px]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[16px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    aria-describedby="phone-error"
                  />
                  <div id="phone-error" className="sr-only" role="alert"></div>
                </div>

                {/* Company */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="company"
                    className="absolute left-4 top-3 text-[#454545] text-[16px] leading-[19.2px]"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[15.75px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    aria-describedby="company-error"
                  />
                  <div id="company-error" className="sr-only" role="alert"></div>
                </div>

                {/* Services */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="services"
                    className="absolute left-4 top-3 text-[#454545] text-[15.75px] leading-[19.2px]"
                  >
                    What services are you interested in?
                  </label>
                  <input
                    id="services"
                    type="text"
                    name="services"
                    placeholder="Services"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[15.88px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    aria-describedby="services-error"
                  />
                  <div id="services-error" className="sr-only" role="alert"></div>
                </div>

                {/* Media Budget */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="budget"
                    className="absolute left-4 top-3 text-[#454545] text-[15.88px] leading-[19.2px]"
                  >
                    Estimated Media Budget
                  </label>
                  <input
                    id="budget"
                    type="text"
                    name="budget"
                    placeholder="Media Budget"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[15.88px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    aria-describedby="budget-error"
                  />
                  <div id="budget-error" className="sr-only" role="alert"></div>
                </div>

                {/* Marketing Services */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="inquiry"
                    className="absolute left-4 top-3 text-[#454545] text-[15.88px] leading-[19.2px]"
                  >
                    What are you inquiring about?
                  </label>
                  <input
                    id="inquiry"
                    type="text"
                    name="inquiry"
                    placeholder="Marketing Services"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[15.88px] text-gray-900 placeholder-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    aria-describedby="inquiry-error"
                  />
                  <div id="inquiry-error" className="sr-only" role="alert"></div>
                </div>

                {/* How did you hear */}
                <div className="relative mt-[16px]">
                  <label 
                    htmlFor="referral"
                    className="absolute left-4 top-3 text-[#454545] text-[15.75px] leading-[19.2px]"
                  >
                    How did you hear about us?
                  </label>
                  <input
                    id="referral"
                    type="text"
                    name="referral"
                    placeholder="Where / Who / How"
                    className="h-[71px] w-full rounded-[16px] bg-[#F2F2F5] pl-4 pt-8 text-[15.88px] text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                    aria-describedby="referral-error"
                  />
                  <div id="referral-error" className="sr-only" role="alert"></div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="h-[63px] w-full rounded-[16px] bg-[#090909] text-white text-[15.75px] hover:bg-white hover:text-black hover:border-1 hover:border-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
                    aria-describedby="submit-status"
                  >
                    Book a Call
                  </button>
                  <div id="submit-status" className="sr-only" role="status"></div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      <div className="mb-14 mt-14">
      <ServicesHero />
      </div>
      <div className="mb-14 mt-14">
      <FAQ  />
      </div>
    </>
  );
}



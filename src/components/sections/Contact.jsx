import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white px-4 py-16 md:py-20 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/10 px-8 py-10 md:px-16 md:py-12">
          {/* Heading */}
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let’s Connect
            </h2>
            <p className="mt-3 text-sm md:text-base leading-7 text-white/70">
              I’m open to entry-level opportunities, collaboration, and
              conversations about web development.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 w-full max-w-md rounded-[20px] border border-white/10 bg-[#0b1330] px-5 py-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-2.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.03] hover:bg-white/10"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
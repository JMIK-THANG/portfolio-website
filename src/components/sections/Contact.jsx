import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white px-4 py-20 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/10 bg-[#0f1b3d] px-8 py-12 md:px-16 md:py-14">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let’s Connect
            </h2>
            <p className="mt-4 text-sm md:text-base leading-7 text-white/70">
              I’m open to entry-level opportunities, collaboration, and
              conversations about web development. Feel free to send a message.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-12 w-full max-w-xl rounded-[24px] border border-white/10 bg-[#0b1330] px-6 py-7"
          >
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                />
              </div>

              {/* Fancy Button */}
              <div className="flex justify-center pt-4">
  <button
    type="submit"
    className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white border border-white/30 bg-white/5 backdrop-blur transition duration-300 hover:bg-white/10 hover:scale-[1.03]"
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

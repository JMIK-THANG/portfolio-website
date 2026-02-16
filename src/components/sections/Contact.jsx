import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white px-4 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-xl">
        {/* Center header */}
        <div className="text-center pt-4">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">
            Contact
          </p>
        </div>

        {/* Form (stacked + centered) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8"
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white
                           placeholder:text-white/35 outline-none transition
                           focus:border-white/30 focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                required
                className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white
                           placeholder:text-white/35 outline-none transition resize-none
                           focus:border-white/30 focus:ring-2 focus:ring-white/20"
              />
            </div>

            {/* Fancy button */}
            <button
              type="submit"
              className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold text-slate-950"
            >
              {/* gradient bg */}
              <span className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white" />

              {/* glow */}
              <span className="absolute -inset-1 opacity-0 blur-xl transition duration-300 group-hover:opacity-70 bg-white/30" />

              {/* shine sweep */}
              <span className="absolute left-[-40%] top-0 h-full w-1/3 -skew-x-12 bg-white/40 opacity-0 transition duration-500 group-hover:left-[120%] group-hover:opacity-100" />

              {/* border */}
              <span className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />

              {/* text */}
              <span className="relative flex items-center gap-2">
                Send
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white px-4 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Left: Text */}
          <div className="md:pt-2">
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">
              Contact
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Let’s build something together.
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed max-w-prose">
              Have a project in mind, a question, or just want to say hello?
              I’m open to new ideas, freelance work, or full-time opportunities.
              Send a message and I’ll get back to you as soon as I can.
            </p>

            {/* Contact lines */}
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-white/70">
                <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
                <span className="text-white/60">Email:</span>
                <a
                  href="mailto:jmikthang5@gmail.com"
                  className="text-white underline underline-offset-4 hover:text-white/90 transition"
                >
                  jmikthang5@gmail.com
                </a>
              </div>

              {/* Optional: add more contact methods later */}
              {/* <div className="flex items-center gap-3 text-white/70">
                <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
                <span className="text-white/60">Location:</span>
                <span>New York, NY</span>
              </div> */}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-7 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Send a message</h3>
                <p className="text-sm text-white/60">
                  Quick note is perfect — I’ll reply soon.
                </p>
              </div>

              <div className="grid gap-4">
               

                {/* Email */}
                <div>
                  <label className="block text-sm text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition
                               focus:border-white/30 focus:ring-2 focus:ring-white/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your idea..."
                    required
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition resize-none
                               focus:border-white/30 focus:ring-2 focus:ring-white/20"
                  />
                 
                </div>
              </div>

              {/* Submit */}
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-white
                             hover:bg-white/90 active:bg-white/80 transition"
                >
                  Send Message
                </button>

                <span className="text-xs text-white/50">
                  Or email me directly above.
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom divider (subtle) */}
        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/45">
          © {new Date().getFullYear()} Jmik Thang. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;

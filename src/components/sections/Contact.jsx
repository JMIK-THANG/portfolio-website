import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white px-4 py-16 md:py-24 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm tracking-[0.25em] text-white/60">
              CONTACT
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Let’s build something together.
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed">
              Have a project in mind, a question, or just want to say hello?
              I’m always open to discussing new ideas, freelance work, or
              full-time opportunities. Drop me a message and I’ll get back
              to you as soon as I can.
            </p>

            <p className="mt-6 text-white/60 text-sm">
              Prefer email?{" "}
              <a
                href="mailto:jmikthang5@gmail.com"
                className="underline underline-offset-4 hover:text-white transition"
              >
                jmikthang5@gmail.com
              </a>
            </p>
          </div>

          {/* Right: Form */}
          <form
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

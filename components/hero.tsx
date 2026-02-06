"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss Alps at sunset"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mt-16">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-light uppercase tracking-wide leading-relaxed hero-text">
            A bright new dawn for digital transfers, sound money and personal freedom.
          </h1>
        </div>
      </div>
    </section>
  );
}

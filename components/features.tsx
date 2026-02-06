"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Features() {
  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* About Column */}
          <div className="text-center">
            <div className="relative aspect-[3/2] w-full mb-6 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="Bitcoin conference audience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-lg uppercase tracking-widest text-primary mb-3 font-normal">
              <Link href="/about-1" className="hover:underline">
                About
              </Link>
            </h3>
            <p className="text-gray-600 mb-4 font-serif text-base">
              Find out about our organization and mission.
            </p>
            <Link
              href="/about-1"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-serif"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Join Us Column */}
          <div className="text-center">
            <div className="relative aspect-[3/2] w-full mb-6 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Bitcoin community members"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-lg uppercase tracking-widest text-primary mb-3 font-normal">
              <Link href="/meetups-events" className="hover:underline">
                Join Us
              </Link>
            </h3>
            <p className="text-gray-600 mb-4 font-serif text-base">
              You can become a contributor to our cause, or participate yourself.
            </p>
            <Link
              href="/meetups-events"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-serif"
            >
              Find Out How
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

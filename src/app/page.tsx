"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
export default function Home() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const areaBtnRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    const title = titleRef.current;
    const description = descriptionRef.current;
    const areaBtn = areaBtnRef.current;

    tl.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
      .fromTo(
        description,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
        }, "-=0.75"
      )
      .fromTo(
        areaBtn,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        }, "-=0.75"
      );
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl">
        <h1
          className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
          ref={titleRef}
        >
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p
          className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto"
          ref={descriptionRef}
        >
          A utility-first CSS framework packed with classes like{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            flex
          </code>
          ,{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            pt-4
          </code>
          ,{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            text-center
          </code>{" "}
          and{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            rotate-90
          </code>{" "}
          that can be composed to build any design, directly in your markup.
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            ref={areaBtnRef}
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

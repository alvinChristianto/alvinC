"use client";
import Image from "next/image";
import React, { useState } from "react";

const projects = [
  {
    title: "Urunan",
    description: (
      <>
        Platform berbasis{" "}
        <strong>blockchain for crowdfunding</strong>. Menggunakan typescript,
        truffle dan solidity.
      </>
    ),
    tech: "blockchain, typescript, solidity, truffle, polygon",
    href: "https://www.instagram.com/p/CtBiuq3L3Qv/?img_index=1",
    linkLabel: "W3W",
    image: "/img/urunan-image.jpg",
  },
  {
    title: "The Cabin Hotel Web Reservation",
    description: (
      <>
        Platform web dimana tamu dapat memesan kamar secara online via web.
        Menggunakan konsep{" "}
        <strong>Check In Check Out Freely</strong>. Tamu dapat check in dan
        check out kapan saja!
      </>
    ),
    tech: "mysql, nextjs, laravel",
    href: "https://www.thecabinhotelgroup.com",
    linkLabel: "Visit →",
    image: "/img/thecabin.JPG",
  },
  {
    title: "KodingKids Jogja",
    description: (
      <>
        Coding Class untuk anak-anak di wilayah Jogjakarta. Terdiri dari 2
        kelas yaitu <strong>PlayDevs</strong> dan <strong>FutureDevs</strong>.
        Orang tua dapat memilih paket yang sesuai dengan umur anak.
      </>
    ),
    tech: "Communication, Managing, nextjs, laravel",
    href: "https://kodingkids.becauseit.fun/",
    linkLabel: "Visit →",
    image: "/img/kodingkids.JPG",
  },
];

const INITIAL_SHOW = 3;

function IndividualProject() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="individual-project" className="bg-slate-100">
      <div className="container">
        <div className="w-full px-4 my-12 md:my-24 max-w-3xl mx-auto">
          <p className="text-slate-400 text-sm font-mono mb-1"># Ongoing Project</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Ongoing Project
          </h3>
          <p className="text-slate-500 mb-10 font-mono text-sm">
            Project-project yang sedang saya handle, khususnya terkait project
            pribadi 🚀
          </p>

          {visible.map((project, i) => (
            <div key={project.title}>
              <div className="flex gap-4 items-start py-5">
                <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden mt-1">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-400 text-xs font-mono mb-0.5">## {project.title}</p>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    {project.title}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <p className="text-xs mb-3">
                    <span className="font-mono bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-600">
                      {project.tech}
                    </span>
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm underline underline-offset-2 hover:opacity-70 font-mono"
                  >
                    [{project.linkLabel}]
                  </a>
                </div>
              </div>
              {i < visible.length - 1 && <hr className="border-slate-300" />}
            </div>
          ))}

          {projects.length > INITIAL_SHOW && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="font-mono text-sm text-primary underline underline-offset-2 hover:opacity-70"
              >
                {showAll
                  ? `[− Show less]`
                  : `[+ Show ${projects.length - INITIAL_SHOW} more]`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default IndividualProject;

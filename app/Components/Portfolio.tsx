"use client";
import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "One Data Berau",
    description: (
      <>
        Platform One Data yang menampilkan data{" "}
        <strong>dokumen dan map</strong>. Menggunakan python dan library geonode
        dan geoserver, admin bisa mengelola data-data baik dokumen maupun peta.
      </>
    ),
    tech: "python, geonode, geoserver, django, postgresql, docker",
    href: "http://satudata.beraukab.go.id/layers/?limit=5&offset=0",
    linkLabel: "Visit →",
    image: "/img/berau_image1.png",
  },
  {
    title: "Jogjatron NFT Music",
    description: (
      <>
        NFT Musik menghubungkan artist dengan penggemar, artist akan mendapat
        token setelah karya NFT terjual. Penggemar dapat menjual kembali NFT,{" "}
        <strong>semua dalam 1 platform!</strong>
      </>
    ),
    tech: "blockchain, Smart Contract, polygon, BSC, ReactJs, PHP Laravel, mysql",
    href: "https://nftmo.jogjatron.com/",
    linkLabel: "Visit →",
    image: "/img/nftmo_image.png",
  },
  {
    title: "Jogjatron Oleh-oleh",
    description: (
      <>
        Platform untuk{" "}
        <strong>bertukar token dan merchandize khas jogjakarta</strong>. User
        yang mempunyai token Jogjatron, bisa menukar token dengan merchandize
        tertentu.
      </>
    ),
    tech: "blockchain, Smart Contract, polygon, BSC, ReactJs, Go, mysql",
    href: "https://oleh2-dev2.jogjatron.com/",
    linkLabel: "Visit →",
    image: "/img/oleh_image.png",
  },
];

const INITIAL_SHOW = 3;

function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="w-full px-4 my-12 md:my-24 max-w-3xl mx-auto">
          <p className="text-slate-400 text-sm font-mono mb-1"># Project Sebelumnya</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Project Sebelumnya
          </h3>
          <p className="text-slate-500 mb-10 font-mono text-sm">
            Kumpulan project yang sudah selesai dikerjakan. Disertai link untuk
            melihat project di lingkungan production maupun staging.
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
                    <span className="font-mono bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-600">
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
              {i < visible.length - 1 && <hr className="border-slate-200" />}
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

export default Portfolio;

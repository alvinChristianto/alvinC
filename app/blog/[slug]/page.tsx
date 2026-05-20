import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

function getArticle(slug: string) {
  const filepath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const { data } = article;
  const title = data.title ?? '';
  const description = data.description ?? '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://alvinch.vercel.app/blog/${slug}`,
      type: 'article',
      publishedTime: data.date,
      tags: data.tags ?? [],
      images: [
        {
          url: '/img/image_alvin.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/img/image_alvin.png'],
    },
  };
}

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(".md", "") }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { data, content } = article;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/#blog"
          className="text-slate-400 text-sm font-mono hover:text-primary transition-colors mb-10 inline-block"
        >
          ← kembali
        </Link>

        <p className="text-slate-400 text-xs font-mono mb-1"># {data.title}</p>
        <h1 className="text-3xl font-bold text-slate-800 mb-3 leading-snug">
          {data.title}
        </h1>
        <p className="text-xs font-mono text-slate-400 mb-4">
          {formatDate(data.date)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-10">
          {(data.tags ?? []).map((tag: string) => (
            <span
              key={tag}
              className="font-mono bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-slate-200 mb-10" />

        <div className="prose prose-slate prose-sm max-w-none
          prose-headings:font-bold prose-headings:text-slate-800
          prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
          prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:bg-slate-100 prose-code:px-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-slate-700
          prose-pre:bg-slate-900 prose-pre:text-slate-100
          prose-strong:text-slate-800
          prose-hr:border-slate-200
          prose-table:text-sm prose-th:text-left prose-th:font-semibold">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

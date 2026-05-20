import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Article {
  slug: string;
  title: string;
  date: string;
  link: string | null;
  description: string;
  tags: string[];
  hasContent: boolean;
}

function getArticles(): Article[] {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: filename.replace(".md", ""),
        title: data.title ?? "",
        date: data.date ?? "",
        link: data.link ?? null,
        description: data.description ?? "",
        tags: data.tags ?? [],
        hasContent: content.trim().length > 0,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  const articles = getArticles();

  return (
    <section id="blog" className="bg-slate-50">
      <div className="container">
        <div className="w-full px-4 my-12 md:my-24 max-w-3xl mx-auto">
          <p className="text-slate-400 text-sm font-mono mb-1"># Blog</p>
          <h3 className="text-2xl font-bold text-slate-800 mb-1">Blog</h3>
          <p className="text-slate-500 mb-10 font-mono text-sm">
            Artikel dan tulisan seputar teknologi, pengalaman, dan hal-hal yang
            saya pelajari.
          </p>

          {articles.map((article, i) => {
            const href = article.hasContent
              ? `/blog/${article.slug}`
              : (article.link ?? "#");
            const linkLabel = article.hasContent
              ? "Baca selengkapnya →"
              : "Baca di Medium →";
            const isExternal = !article.hasContent;

            return (
              <div key={article.slug}>
                <div className="py-5">
                  <p className="text-slate-400 text-xs font-mono mb-0.5">
                    ## {article.title}
                  </p>
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-primary group-hover:opacity-70 transition-opacity mb-1">
                      {article.title}
                    </h4>
                  </a>
                  <p className="text-xs font-mono text-slate-400 mb-2">
                    {formatDate(article.date)}
                    {article.hasContent ? null : (
                      <span className="ml-2 text-slate-300">· Medium</span>
                    )}
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono bg-white border border-slate-200 rounded px-1.5 py-0.5 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-primary text-sm underline underline-offset-2 hover:opacity-70 font-mono"
                  >
                    [{linkLabel}]
                  </a>
                </div>
                {i < articles.length - 1 && <hr className="border-slate-200" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

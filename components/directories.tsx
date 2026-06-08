import Link from "next/link";
import Image from "next/image";

export default function Directories({
  parent,
  subdirectory,
  path,
  previewImage,
  href,
}: {
  parent: string;
  subdirectory: string;
  path: string;
  previewImage?: string;
  href?: string;
}) {
  return (
    <div className="group relative border-b border-b-surface-800 hover:border-b-brand-400/40 hover:bg-brand-400/20 transition-colors duration-200">
      <Link
        href={href ?? "#"}
        className="text-sm md:text-base flex flex-row items-center gap-4 py-3"
      >
        <span className="text-secondary-400">{parent}</span>
        <span className="text-surface-400">{subdirectory}</span>
        <span className="text-surface-200">{path}</span>
      </Link>
      {previewImage && (
        <div className="hidden rounded-sm md:block absolute left-136 top-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-surface-950 border border-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 overflow-hidden z-10">
          <p className="absolute inset-0 flex items-center justify-center text-brand-400 text-xs z-10 group-hover:animate-pixel-reveal">
            // LOADING IMAGE...
          </p>

          <div
            className="absolute inset-0 group-hover:animate-crt-draw z-20"
            style={{ animationDelay: "200ms", clipPath: "inset(0 0 100% 0)" }}
          >
            <Image
              src={previewImage}
              fill
              className="object-cover"
              alt="Project preview"
              sizes="480px"
            />
          </div>
        </div>
      )}
    </div>
  );
}

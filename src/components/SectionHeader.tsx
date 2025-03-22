type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;

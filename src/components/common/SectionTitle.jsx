function SectionTitle({
  label,
  title,
  subtitle,
}) {
  return (
    <div className="mb-20">
      <p className="section-label mb-6">
        {label}
      </p>

      <h2
        className="
        section-title
        text-[3rem]
        md:text-[6rem]
        leading-[0.9]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          body-text
          max-w-[700px]
          mt-8
          text-lg
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
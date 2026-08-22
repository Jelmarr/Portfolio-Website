const Education = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_3fr] md:gap-8">
      {/* Date Column */}
      <p className="mt-1 text-sm text-muted-foreground font-medium">
        2022 - 2026
      </p>

      {/* Details Column */}
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Bachelor of Science in Information System
          </h3>
          <p className="text-sm font-medium text-muted-foreground">
            Kolehiyo ng Lungsod ng Dasmariñas
          </p>
          <p className="text-xs font-medium text-muted-foreground mt-1">
            Major in Data Science
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

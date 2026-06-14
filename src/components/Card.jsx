function Card({ image, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:shadow-2xl hover:shadow-amber-accent/10 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/0 via-coffee-900/50 to-coffee-950/90 z-10" />

      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="relative z-20 p-6">
        <h3 className="font-display text-xl font-semibold text-cream-100 mb-2 group-hover:text-amber-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-cream-300/80 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-amber-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-sm font-medium">Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-16 h-16 bg-amber-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default Card;

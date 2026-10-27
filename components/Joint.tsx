/** Horizontale las van het logo: groen en blauw, met een rechthoekige tab. */
export default function Joint() {
  return (
    <div className="relative h-7 w-full" aria-hidden="true" data-section="las">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-green" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-blue" />
      <div className="absolute left-1/2 top-1/2 h-3.5 w-9 -translate-x-[70%] -translate-y-1/2 bg-green" />
    </div>
  );
}

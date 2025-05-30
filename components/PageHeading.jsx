export default function PageHeading({ title = "Page Title", breadcrumbs = [] }) {
  return (
    <div
      className="relative w-full h-60 flex items-center justify-center bg-cover bg-center mt-16 md:mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(1, 39, 39, 0.8), rgba(1, 39, 39, 0.8)), url('/PageHeading.jpg')",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <div className="mt-3 text-white text-sm space-x-2">
          <span className="text-gray-300">Home</span>
          {breadcrumbs.map((item, index) => (
            <span key={index}>
              <span className="text-gray-300">/ </span>
              <span
                className={
                  index === breadcrumbs.length - 1
                    ? "text-orange-500"
                    : "text-gray-300"
                }
              >
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

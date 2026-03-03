"use client";

export default function Problem() {
  const features = [
    {
      id: 1,
      title: "Discover Nearby Shops",
      description:
        "Find trusted local businesses quickly using smart location-based search. Save time and explore stores around you instantly.",
      image: "https://source.unsplash.com/800x600/?shop,market",
    },
    {
      id: 2,
      title: "Connect With Local Sellers",
      description:
        "Interact directly with shop owners, explore products, and get the best deals without unnecessary middlemen.",
      image: "https://source.unsplash.com/800x600/?store,business",
    },
  ];

  return (
    <section className="w-full bg-[#e8e4d3] py-20 px-6 flex flex-col gap-16">

      {features.map((item, index) => (
        <div
          key={item.id}
          className="w-full mx-auto rounded-3xl p-8"
        >
          {/* ZIG ZAG LAYOUT */}
          <div
            className={`flex flex-col md:flex-row items-center gap-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="md:w-1/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover rounded-2xl border border-gray-500"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}
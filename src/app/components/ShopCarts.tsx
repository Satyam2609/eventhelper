"use client";

export default function ShopCarts() {

  const data = [
  {
    id: 1,
    image: "https://source.unsplash.com/400x300/?grocery,store",
    title: "Fresh Mart Grocery",
    rating: 4.5,
    description: "Best quality groceries and daily essentials available at affordable prices.",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/400x300/?fashion,shop",
    title: "Urban Fashion Store",
    rating: 4.2,
    description: "Trendy clothing collection for men and women with modern styles.",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/400x300/?electronics,store",
    title: "Tech World Electronics",
    rating: 4.7,
    description: "Latest gadgets and electronic devices with warranty support.",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/400x300/?bookstore,library",
    title: "Book Haven",
    rating: 4.8,
    description: "Wide range of academic and story books for students.",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/400x300/?cafe,coffee",
    title: "Green Leaf Cafe",
    rating: 4.3,
    description: "Fresh coffee, snacks, and peaceful environment.",
  },
  {
    id: 6,
    image: "https://source.unsplash.com/400x300/?mobile,shop",
    title: "Smart Mobile Hub",
    rating: 4.4,
    description: "Mobile phones and accessories with quick repair service.",
  },
  {
    id: 7,
    image: "https://source.unsplash.com/400x300/?gym,fitness",
    title: "Fitness Zone",
    rating: 4.6,
    description: "Gym equipment and fitness accessories.",
  },
  {
    id: 8,
    image: "https://source.unsplash.com/400x300/?home,decor",
    title: "Home Decor Studio",
    rating: 4.1,
    description: "Stylish decoration items for modern homes.",
  },
];

  return (
    <section className="w-full bg-[#fffaf0] py-16 px-6 flex justify-center">

      {/* OUTER CONTAINER */}
      <div className="w-full max-w-8xl rounded-3xl p-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {data.map((shop) => (
            <div
              key={shop.id}
              className="bg-[#e3dfcc] rounded-2xl border border-gray-400 overflow-hidden
                         hover:scale-105 hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={shop.image}
                alt={shop.title}
                className="w-full h-42 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-2">

                <h2 className="font-semibold text-lg">
                  {shop.title}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {shop.description}
                </p>

                <span className="text-sm font-medium">
                  ⭐ {shop.rating}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
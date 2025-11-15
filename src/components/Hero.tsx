export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My College</h1>
      <p className="text-lg max-w-2xl">
        Empowering students with knowledge, innovation, and excellence for a brighter future.
      </p>
      <button className="mt-8 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
        <a href="https://www.shobhituniversity.ac.in/">Learn More</a>
      </button>
    </section>
  );
}

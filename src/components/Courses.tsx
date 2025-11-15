export default function Courses() {
  const courses = [
    { title: "Computer Science", desc: "Learn programming, AI, and software design." },
    { title: "Business Management", desc: "Master leadership and entrepreneurship." },
    { title: "Mechanical Engineering", desc: "Innovate in design and manufacturing." },
  ];

  return (
    <section id="courses" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Courses</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((c) => (
          <div key={c.title} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

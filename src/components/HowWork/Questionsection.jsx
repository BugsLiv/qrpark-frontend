import Image from "next/image";

const trustItems = [
  {
    src: "/nophone.png",
    label: "No Phone Numbers Shared.",
    bold: false,
  },
  {
    src: "/verifieduser.png",
    label: "Verified Users",
    bold: true,
  },
  {
    src: "/dataprotected.png",
    label: "Data Protected",
    bold: true,
  },
];

export default function QuestionSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl bg-white shadow-soft px-6 py-10">

        {/* Title with lines */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-[1px] bg-gray-300" />
          <h2 className="text-2xl font-bold text-primary whitespace-nowrap">
            Have More Questions?
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300" />
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-4 shadow-soft  px-4 py-8 border border-gray-200"
            >
              <Image src={item.src} width={64} height={64} alt={item.label} />
              <p
                className={`text-center text-sm text-primary ${
                  item.bold ? "font-bold" : ""
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-lg font-bold text-primary">Need Information?</p>
          <a
            href="/faqs"
            className="rounded-full bg-buttonbg hover:bg-teal-600 transition-colors px-6 py-2 text-white font-semibold text-sm"
          >
            View FAQs
          </a>
        </div>

      </div>
    </section>
  );
}
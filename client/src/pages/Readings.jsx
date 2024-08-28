import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import { Link } from "react-router-dom";

function Readings() {
  useGSAP(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
      gsap.from(".hero", {
        y: 200,
        opacity: 0,
        delay: 2.5,
        duration: 0.8,
      });
    }
  });

  const articles = [
    { id: 1, title: "On Mother's Flag and Symbol", path: "article1" },
    { id: 2, title: "Sample article 2", path: "article2" },
    { id: 3, title: "Sample article 3", path: "article3" },
    // Add more articles here
  ];

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="h-full w-full flex flex-col items-center hero py-20">
        <PageHeading>Readings</PageHeading>
        <div className="mt-8 w-3/4 md:w-1/2 lg:w-1/3">
          <ul className="space-y-4 list-disc list-inside bg-white p-6 rounded-lg shadow-md">
            {articles.map((article) => (
              <li key={article.id} className="text-lg font-semibold">
                <Link
                  to={`/readings/${article.path}`}
                  className="text-[#dbaf46] hover:text-[#675220] hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Readings;

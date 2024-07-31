import Navbar from "../components/Navbar";

function UsefulLinks() {
  return (
    <div className="w-full h-screen gradient-background">
      <Navbar />
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-6xl text-black text-center font-dancing-script-bold mb-4 sm:mb-16">
          Useful Links
        </h1>
      </section>
    </div>
  );
}

export default UsefulLinks;

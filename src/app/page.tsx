import ContactForm from "./Components/from";
import BackgroundImageComponent from "./Components/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-screen-xl gap-10">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1">
          <BackgroundImageComponent />
        </div>
      </div>
    </main>
  );
}

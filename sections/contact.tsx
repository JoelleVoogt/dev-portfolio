import Terminal from "@/components/terminal";
import Concatenate from "@/components/concatenate";
import Socials from "@/components/socials";

export default function Contact() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="contact"
    >
      <Terminal folder="contact">
        <div className="flex flex-col gap-18 my-6">
          <Concatenate
            folderLocationFirst="~/contact$"
            folderLocationSecond="cat ./links.txt"
          />
          <div className="flex flex-col gap-8 md:pl-6">
            <p className="text-surface-400">
              // Ik ben altijd benieuwd naar interessante mensen en projecten
            </p>

            <div className="flex flex-col gap-2">
              <Socials
                social="EMAIL"
                destination="mailto:joelle.iris@gmail.com"
                url="Stuur een mail"
              />
              <Socials
                social="LINKEDIN"
                destination="https://www.linkedin.com/in/joelle-voogt/"
                url="Connect LinkedIn"
              />
              <Socials
                social="GITHUB"
                destination="https://github.com/joellevoogt"
                url="Mijn repositories"
              />
            </div>
          </div>
        </div>
      </Terminal>
    </div>
  );
}

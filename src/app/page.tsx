import { Hero } from "@/components/hero";
import { ExperienceList } from "@/components/experience-list";
import { ProjectsList } from "@/components/projects-list";
import { WritingList } from "@/components/writing-list";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceList />
      <ProjectsList />
      <WritingList />
      <Contact />
      <Footer />
    </>
  );
}

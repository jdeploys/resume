import { ResumeAbout } from '@/components/resume/ResumeAbout';
import { ResumeTitle } from '@/components/resume/ResumeTitle';
import { ResumeExperienceList } from '@/components/resume/experience/ResumeExperienceList';
import { ResumeProjectList } from '@/components/resume/project/ResumeProjectList';

export default function HomePage() {
  return (
    <>
      <ResumeTitle />
      <div className="lg:col-span-7 col-span-12 space-y-12">
        <ResumeAbout />
        <ResumeExperienceList />
        <ResumeProjectList />
      </div>
    </>
  );
}

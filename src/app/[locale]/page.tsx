import { ResumeAbout } from '@/components/resume/ResumeAbout';
import { ResumeTitle } from '@/components/resume/ResumeTitle';
import { ResumeExperienceList } from '@/components/resume/experience/ResumeExperienceList';

export default function HomePage() {
  return (
    <>
      <ResumeTitle />
      <ResumeAbout />
      <ResumeExperienceList />
    </>
  );
}

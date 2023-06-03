import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";

export default function Experience() {
  const ICSASETags = ["html", "css", "js"];
  const ICSGTETags = ["html", "css", "js"];
  const FCSETags = ["html", "css", "Javascript"];
  const FCSITags = ["HTML", "CSS", "Javascript", "Bootstrap", "C#", "ASP .NET Core",];
  let ICSASEDesc = "description wrethhtgrfewdesfgdfhgfgrfedaesfdfgjhghftgrfeaderthgyhtreretyjffyhrtewwegrh  gef rbweaf  weaf";
  let ICSGTEDesc = "description";
  let FCSEDesc = "description";
  let FCSIDesc = "description";
  return (
    <div id = "Experience">
      <ExperienceComponent company = "Infinite Computer Solutions" title = "Associate Software Engineer" span = "Aug 23, 2021 - sep 05, 2022" tags = { ICSASETags } description = { ICSASEDesc } />
      <ExperienceComponent company = "Infinite Computer Solutions" title = "Graduate Trainee Engineer" span = "Feb 08, 2021 - Aug 23, 2021" tags = { ICSGTETags } description = { ICSGTEDesc } />
      <ExperienceComponent company = "Fake Company" title = "Software Engineer" span = "Jan 23, 2019 - Feb 01, 2021" tags = { FCSETags } description = { FCSEDesc } />
      <ExperienceComponent company = "Fake company" title = "Software Intern" span = "May 19, 2018 - Jan 07, 2019" tags = { FCSITags } description = { FCSIDesc } />
    </div>
  )
}

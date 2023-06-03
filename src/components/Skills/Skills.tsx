import SkillsCard from "../SkillsCard/SkillsCard";

const skills = ["HTML", "CSS", "Javascript", "c#", "dotnet", "React", "Angular", "Python", "Bootsrtrap"]
export default function Skills() {
  return (
    <div>
      {
        skills.map((skill) => <SkillsCard skill = {skill} imgPath = {"../../assets" + skill} />)
      }
    </div>
  )
}

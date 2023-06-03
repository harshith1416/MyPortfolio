import "./SkillsCard.css"
type SkillsProp = {
    skill: string;
    imgPath: string;
}
export default function SkillsCard(props: SkillsProp) {
  return (
    <div>
        <img ref = {props.imgPath} ></img>
        <h1>{props.skill}</h1>
    </div>
  )
}

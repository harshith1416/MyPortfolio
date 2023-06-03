import "./ProjectsCard.css"
type ProjectCardProp = {
    name: string;
    github: string;
    website?: string;
}
export default function ProjectsCard(props: ProjectCardProp) {
  return (
    <div className = "ProjectsCard">
        <div>
            <img ref = { "../../assets" + props.name} />
        </div>
        <h1>
            {props.name}
        </h1>
        <div>
            <button ref = {props.github}>Github</button>
            <button ref = {props.website}>Website</button>
        </div>
    </div>
  )
}

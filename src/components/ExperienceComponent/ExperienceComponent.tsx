import TagComponent from "../TagComponent/TagComponent";

interface ExperiencePropType {
    span: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
}
export default function ExperienceComponent(props: ExperiencePropType) {
    const tags = props.tags;
  return (
    <div className = "ExperienceComponent">
        <div>
            {props.span}
        </div>
        <div>
            <h1>{props.title}, {props.company}</h1>
            <p>{props.description}</p>
        </div>
        {
            tags.map((tag) => <TagComponent tag = {tag} />)
        }
    </div>
  )
}

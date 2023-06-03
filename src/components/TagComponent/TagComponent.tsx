import "./TagCopponent.css"

type TagProp = {
    tag: string;
}


export default function TagComponent(props:TagProp) {
  return (
    <div className = "TagComponent">
        {props.tag}
    </div>
  )
}

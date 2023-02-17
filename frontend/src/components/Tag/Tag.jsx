import "./Tag.css";

export default function Tag(props) {
  const tags = props.tag; 
  return (
    <div className="tag">
      <h5>•{tags}</h5> 
    </div>
  )
}
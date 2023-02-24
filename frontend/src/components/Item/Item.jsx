import Tag from "../Tag/Tag";
import "./Item.css";

export default function Item(props) {
  const item = props.item; 
  const tags = item.tag;
  // console.log(tags)
  return (
    <div className="card">
      <div className="tags">
      {tags && tags.map(function (tag){
        return <Tag tag={tag}/>
      })}
      </div>
      <h2>{item.item}</h2>
      <img 
        src={item.imagemUrl}
      />
    </div>
  )
}
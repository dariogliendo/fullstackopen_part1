import Part from "./Part"
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, ix) => 
        <Part part={part} key={ix}></Part>
      )}
    </div>
  )
}

export default Content
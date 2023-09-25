const Total = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>Number of exercises {total}</div>
  )
}

export default Total
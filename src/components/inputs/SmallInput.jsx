
const SmallInput = (props) => {

  return (
    <input
    className='form-control form-control-sm'
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    value={props.value}
    onChange={props.onchange}
    data-label={props.datalabel}
  />
  )
}

export default SmallInput
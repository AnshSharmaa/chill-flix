import Movies from './Movies/Movies'

const Lolomo = (props) => {
  return (
    <div style={{ color: '#E5E5E5' }}>
      <h3>{props.title}</h3>
      <Movies />
    </div>
  )
}

export default Lolomo

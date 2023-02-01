
const Select = ({ value, options, onChange }) => {

  return (
  <select value={value} onChange={e => onChange(e)}>
    <option value=''>Choose here</option>
    {options.map(option => {
      const isNoSizes = 'there are no available sizes' === option

      if(typeof option === 'string'){
        return <option disabled={isNoSizes} key={option}>{option}</option>
      }

      return <option disabled={!option.isAvailabe} key={option.number}>{option.label} - {option.number}</option>
    })}
  </select>
  )
}

export default Select
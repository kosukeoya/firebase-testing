import React from 'react';

interface Props {
  title: string
  selectedValue: string
  onChangeValue: Function
}

export const RadioInput: React.FC<Props> = props => {
  return (
    <div>
      <span>{props.title}</span>
      <input type='radio' id='1' name='radio-group' value='radio1' onChange={(e) => props.onChangeValue(e.target.value)}/><label>１</label>
      <input type='radio' id='2' name='radio-group' value='radio2' onChange={(e) => props.onChangeValue(e.target.value)}/><label>2</label>
      <input type='radio' id='3' name='radio-group' value='radio3' onChange={(e) => props.onChangeValue(e.target.value)}/><label>3</label>
    </div>
  )
}

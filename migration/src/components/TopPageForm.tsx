import React from 'react';
import { TextInput } from './TextInput';
import { SubmitButton } from './SubmitButton';
import { RadioInput } from './RadioInput';
import { ShowState } from './ShowState';
import { TopPageHandler } from '../container/TopPageContainer';

interface Props {
  inputValue: string
  selectedValue: string
  clickCount: number
}

export const TopPageForm: React.FC<Props & TopPageHandler> = props => {
  return (
    <React.Fragment>
      <TextInput title="入力" inputValue={props.inputValue} onChangeValue={props.handleOnChangeValue}></TextInput> 
      <RadioInput title="ラジオ" selectedValue={props.selectedValue} onChangeValue={props.handleOnSelectedValue}></RadioInput>
      <SubmitButton title="Click me" onClick={props.handleOnClick}></SubmitButton>
      <ShowState inputValue={props.inputValue} selectedValue={props.selectedValue} clickCount={props.clickCount}></ShowState>
    </React.Fragment>
  )
}

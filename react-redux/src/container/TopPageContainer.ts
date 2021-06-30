import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TextInputActions } from '../actions';
import { TopPageForm } from '../components/TopPageForm';
import { AppState } from '../store';

export interface TopPageHandler {
  handleOnChangeValue(value: string): void
  handleOnSelectedValue(value: string): void
  handleOnClick(): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    inputValue: appState.state.inputValue,
    selectedValue: appState.state.selectedValue,
    clickCount: appState.state.clickCount
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOnChangeValue: (value: string) => { dispatch(TextInputActions.updateTextInputValue(value)) },
    handleOnSelectedValue: (value: string) => { dispatch(TextInputActions.updateSelectedValue(value)) },
    handleOnClick: () => { dispatch(TextInputActions.updateClickCount()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)

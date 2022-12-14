import { useDispatch } from 'react-redux';
import { classVariablesActions } from '../../store/class-variables';
import { methodsActions } from '../../store/methods';
import styles from './RemoveInputFieldButton.module.scss';

function RemoveInputField(props) {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    if (props.type === 'variable') {
      dispatch(classVariablesActions.removeVariable(props.id));
    } else if (props.type === 'method') {
      dispatch(methodsActions.removeMethod(props.id));
    }
  };

  return <button onClick={removeItemHandler} className={styles['delete-btn']} />;
}

export default RemoveInputField;

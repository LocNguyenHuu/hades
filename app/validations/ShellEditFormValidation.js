import memoize from 'lru-memoize';
import {createValidator, required, minLength, maxLength, email, checked, equalsTo} from './validation';

const ShellEditFormValidation = createValidator({
  host: [required, minLength(4)],
  hostName: [required, minLength(2)]
});
export default memoize(10)(ShellEditFormValidation);

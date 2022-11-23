/** @format */

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import loginSchema from 'validation/loginSchema';
import validate from 'validation/validate';
import useAutoLogin from './useAutoLogin';
import { startLoading } from 'store/loading';
const useRequestToServer = () => {
  const history = useHistory();
  const AutoLogin = useAutoLogin();
  const dispatch = useDispatch();

  const requestToServer = (
    inputs,
    schema,
    url,
    method = 'post',
    pushTo = '/'
  ) => {
    const { error } = validate(inputs, schema);
    if (!error && method == 'post') {
      axios
        .post(url, inputs)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            AutoLogin();
            history.push(pushTo);
            return;
          } else if (res.data.name) {
            dispatch(startLoading());
            requestToServer(
              { email: inputs.email, password: inputs.password },
              loginSchema,
              '/users/login',
              'post',
              inputs.biz == 'true' ? '/createcard' : '/'
            );
          }
          if (res.data.title) {
            history.push(`/mycards`);
          }

          return {};
        })
        .catch(err => console.log(err));
    }
    if (!error && method == 'put') {
      axios
        .put(url, inputs)
        .then(res => {
          history.push(`/mycards`);
        })
        .catch(err => console.log(err));
    }
    return error;
  };
  return requestToServer;
};

export default useRequestToServer;

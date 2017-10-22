import * as types from '../ActionTypes';
import Api from '../../services/http';
import * as constants from '../../constants/constants';

// TODO: don't duplicate this code
function getCurrentUser() {
  const user = localStorage.getItem('user'); // eslint-disable-line
  let currentUser;
  try {
    currentUser = JSON.parse(user);
  } catch (e) {
    currentUser = null;
  }
  return currentUser;
}

const URLS = {
  jobs: `${constants.BASE_SERVER_URL}/api/jobs`,
};

export const jobCreationFailed = () => ({
  type: types.JOB_CREATION_FAILED,
});

export const jobCreationSuccess = newJob => ({
  type: types.JOB_CREATION_SUCCESS,
  job: newJob,
});

export const createJob = job => async (dispatch) => {
  try {
    const newJob = await Api.post(
      URLS.jobs,
      { ...job, userId: getCurrentUser().id },
    );
    dispatch(jobCreationSuccess(newJob));
  } catch (e) {
    dispatch(jobCreationFailed(e));
  }
};

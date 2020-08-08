import { FETCH_GRADES_BEGIN, FETCH_GRADES_SUCCESS, FETCH_GRADES_FAILURE } from './actionTypes';
import axios from 'axios';

//Same logic as in courseActions

export const fetchGradesBegin = () => (dispatch) => {
    dispatch({
        type: FETCH_GRADES_BEGIN
    });
};

export const fetchGradesSuccess = (response) => (dispatch) => {
    dispatch({
        type: FETCH_GRADES_SUCCESS,
        data: response
    });
};

export const fetchGradesFailure = (error) => (dispatch) => {
    dispatch({
        type: FETCH_GRADES_FAILURE,
        error: error
    });
};

export const fetchGrades = (coursecode) => {
    return (dispatch) => {
        dispatch(fetchGradesBegin());
        axios
            .get('https://courses.victorjorgensen.com/api?' + coursecode + '/grades/')
            .then((response) => {
                dispatch(fetchGradesSuccess(response.data)); //skal det være .data her?
            })
            .catch((error) => {
                dispatch(fetchGradesFailure(error));
            });
    };
};

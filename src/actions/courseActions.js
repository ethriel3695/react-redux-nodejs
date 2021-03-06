import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as productService from '../../tools/services/productService';

export function loadCoursesSuccess (courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess (course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess (course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess (course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses () {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return productService.findAll().then(courses => {
      dispatch(loadCoursesSuccess(courses.products));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCourse (course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return productService.saveCourse(course).then(savedCourse => {
      course.id !== 0 ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function deleteCourse (course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return productService.deleteCourse(course).then(deletedCourse => {
      dispatch(deleteCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

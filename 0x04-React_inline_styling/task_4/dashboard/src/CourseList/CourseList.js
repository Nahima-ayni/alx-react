import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  header: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  row: {
    borderBottom: '1px solid #ddd',
  },
  cell: {
    padding: '8px',
    textAlign: 'left',
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)} id="CourseList">
      <thead>
        <CourseListRow
          className={css(styles.header)}
          textFirstCell="Available courses"
          isHeader={true}
        />
        <CourseListRow
          className={css(styles.header)}
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;

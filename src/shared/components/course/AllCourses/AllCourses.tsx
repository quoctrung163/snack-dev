import * as React from 'react';
import 'components/common/CourseOne/CourseOne.Styles.css';

import Course from 'components/common/Course/Course';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const AllCourses = ({ courses }: any) => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <CircleLoader />
            ) : (
                <div className="block__header">
                    <section className="course-one course-page">
                        <div className="container">
                            <div className="row">
                                {courses.length > 0
                                    ? courses.map((course: any[], index: number | string) =>
                                          courses.length === 1 ? (
                                              <Course key={index} col={6} course={course} />
                                          ) : courses.length === 2 ? (
                                              <Course key={index} col={6} course={course} />
                                          ) : (
                                              <Course key={index} col={4} course={course} />
                                          )
                                      )
                                    : ''}
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};

export default AllCourses;

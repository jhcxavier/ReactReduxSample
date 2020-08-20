import React from "react";

const CoursePage = () => {

    const [course, setCourse] = useState({
        title: ""
    })
    return (
        <form>
            <h2>COurses</h2>
            <h3>Add Courses</h3>
            <input
                type="text"
                onChange={(e) => { setCourse(e.target.value) }}
                value={course.title}
            />
        </form>
    )
}
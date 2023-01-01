import {getFeaturedCourses} from "../../../../../utils/mock/mockData";
import {Grid} from "@mantine/core";
import {CourseCard} from "../../../course/CourseCard";

export const FeaturedCourses = () => {
    const courses=getFeaturedCourses();

    return <section className={"wrapper-x py-2xl"}>
        <div className="text-area text-center">
            <div className="text-3xl">
                Explore through our vast array of courses
            </div>
            <div className="text-lg">The latest news, technologies, and resources from our team.</div>
        </div>
        <Grid className="course-list mt-lg">
            {courses.map((v,key)=>(
                    <Grid.Col span={4}>
                        <CourseCard course={v}/>
                    </Grid.Col>
                ))}
        </Grid>
    </section>
}
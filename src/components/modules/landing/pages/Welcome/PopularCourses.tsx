import { getLatestCourses} from "../../../../../utils/mock/mockData";
import {Button, Grid} from "@mantine/core";
import {CourseCard} from "../../../course/CourseCard";

export const PopularCourses = () => {
    const courses=getLatestCourses();

    return <section className={"wrapper-x py-2xl"}>
        <div className="text-area flex justify-between">
            <div>
                <div className="text-3xl">
                    Our Popular courses
                </div>
                <div className="text-lg">Tool and strategies modern teams need to help their companies grow.</div>
            </div>
            <Button variant={"subtle"}>View all</Button>
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
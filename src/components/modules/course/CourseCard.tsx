import {Badge, Avatar, Card} from "@mantine/core"

export const CourseCard = ({course}: any) => {
    return (
        <Card className="message" withBorder>
            <img src={course.img} alt="" className={"w-full object-cover"} style={{aspectRatio: "16 / 9"}}/>
            <div className="card-details mt-sm">
                <Badge className="text-sm">{course.category}</Badge>
                <div className="font-bold text-xl">{course.title}</div>
                <div className={"py-xs"}>{course.shortDescription}</div>

                <div className="couse-tutor flex mt-sm">
                    <Avatar
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"/>
                    <div className={"pl-xs"}>
                        <div className="text-md">{course.tutor.name}</div>
                        <div className="text-sm text-gray-500">{course.dateCreated}</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
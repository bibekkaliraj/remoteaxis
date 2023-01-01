import {Button, Grid} from "@mantine/core";
import {ArrowRight} from "tabler-icons-react";

const metrics = [
    {value: "500", label: "Users", cta:"Learn More"},
    {value: "310", label: "Graduates", cta:"Check Rankings"},
    {value: "450", label: "Courses", cta:"View All"},
    {value: "120", label: "Teachers", cta:"Learn More"},
]
export const Metrics = () => (
    <section className={"wrapper-x my-lg"}>
        <Grid className={"px-2xl"}>
            {metrics.map((v, key) => (
                <Grid.Col span={3} key={key}>
                    <div className="">
                        <div className="text-7xl text-primary-700">{v.value}</div>
                        <div className="text-xl">{v.label}</div>
                        <div>
                            <Button variant={"subtle"}>{v.cta} <span><ArrowRight/></span></Button>
                        </div>
                    </div>
                </Grid.Col>
            ))}
        </Grid>
    </section>
)
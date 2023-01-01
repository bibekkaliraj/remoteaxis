import {Grid, Space} from "@mantine/core";
import {Logo} from "../../../common/Logo";

export const FooterLanding = ()=>(
    <footer className={"text-white w-full py-lg wrapper-x bg-gray-800"}>
        <Grid>
            <Grid.Col span={3}>
                <div className="text-bold">Navigation</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
            </Grid.Col>
            <Grid.Col span={2}>
                <div className="text-bold">Courses</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
            </Grid.Col>
            <Grid.Col span={2}>
                <div className="text-bold">Navigation</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
            </Grid.Col>
            <Grid.Col span={2}>
                <div className="text-bold">Help and Support</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
            </Grid.Col>
            <Grid.Col span={3}>
                <div className="text-bold">Navigation</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
                <div className="nav-item py-sm">Nav Item</div>
            </Grid.Col>
        </Grid>
        <div className="flex w-full jusitfy-between">
            <div><Logo/></div>
            <Space/>
            {/*<div>All rights reserved 2022</div>*/}
        </div>
    </footer>
)
import { Header, Container, Anchor, Group, Burger, TextInput, Menu, Button} from '@mantine/core';
import {Logo} from "../../../common/Logo";
import {ArrowDown, ChevronDown, Search} from "tabler-icons-react";

export function NavLanding() {
    return (
        <Header height={60} className={"flex justify-between wrapper-x items-center"}>
           <Logo/>
            <div className={"flex-grow px-lg"}>
                <TextInput placeholder={"Search Everything"} rightSection={<Search/>}/>
            </div>
            <div className="nav-area flex">
                <div className="nav-items">
                    <div className="nav-item">
                        <Menu>
                            <Menu.Target>
                               <div className={"flex items-center cursor-pointer hover:bg-gray-200 rounded px-md py-xs"}>Courses <ChevronDown/></div>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item>
                                    Machine Learning
                                </Menu.Item>
                                <Menu.Item>
                                    Frontend Development
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </div>
                <div className="auth-buttons">
                    <Button>Login</Button>
                    <Button variant={"outline"} className={"ml-xs"}>Sign up</Button>
                </div>
            </div>
        </Header>
    );
}
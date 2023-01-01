import { Card } from "@mantine/core";

export const Testomonial = ({testomonial}:any)=>(
    <Card className={"relative flex items-end"} style={{height:400}}>
        <img src={testomonial.img} alt="" className={"absolute top-none left-none"} width={"w-full"}/>
        <div className="text-area backdrop-blur-3xl py-lg px-md text-white bg-gray-300 relative w-full">
            <div className={"font-bold"}>{testomonial.name}</div>
            <div className={"font-bold"}>{testomonial.quote}</div>
            <div className={"font-bold"}>{testomonial.job}</div>
            <div className={"font-bold"}>{testomonial.company}</div>
        </div>
    </Card>
)
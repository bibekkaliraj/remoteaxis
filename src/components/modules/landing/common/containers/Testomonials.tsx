import {Carousel} from '@mantine/carousel';
import {Testomonial} from "../components/Testomonial";
import {Button} from "@mantine/core";
import {MockTestomonials} from "../../../../../utils/mock/mockData";

export const Testomonials = () => {

    return (
        <section className="wrapper-x">
            <div className="text-area flex justify-between">
                <div>
                    <div className="text-3xl">
                        Don’t just take our word for it
                    </div>
                    <div className="text-lg">Hear from some of our amazing customers who are building faster.</div>
                </div>
                <Button variant={"subtle"}>Sign up</Button>
            </div>
            <Carousel
                className={"mt-xl"}
                withIndicators
                height={500}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}
            >
                {MockTestomonials.map((v, key) =>
                    <>
                        <Carousel.Slide><Testomonial testomonial={v}/></Carousel.Slide>
                        <Carousel.Slide><Testomonial testomonial={v}/></Carousel.Slide>
                        <Carousel.Slide><Testomonial testomonial={v}/></Carousel.Slide>
                        <Carousel.Slide><Testomonial testomonial={v}/></Carousel.Slide>
                        <Carousel.Slide><Testomonial testomonial={v}/></Carousel.Slide>
                        <Carousel.Slide><Testomonial testomonial={v}/></Carousel.Slide>
                    </>)
                }
                {/* ...other slides */}
            </Carousel>
        </section>
    );
}

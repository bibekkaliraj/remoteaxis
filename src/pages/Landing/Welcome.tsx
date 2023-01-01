import {Hero} from "../../components/modules/landing/pages/Welcome/Hero";
import {FeaturesSection} from "../../components/modules/landing/common/containers/FeaturesSection";
import {Metrics} from "../../components/modules/landing/common/containers/Metrics";
import {PopularCourses} from "../../components/modules/landing/pages/Welcome/PopularCourses";
import {CategoriesSection} from "../../components/modules/landing/pages/Welcome/CategoriesSection";
import {FeaturedCourses} from "../../components/modules/landing/pages/Welcome/FeaturedCourses";
import {LatestCourses} from "../../components/modules/landing/pages/Welcome/LatestCourses";
import {MobileApp} from "../../components/modules/landing/common/containers/MobileApp";
import {Testomonials} from "../../components/modules/landing/common/containers/Testomonials";
import {NewsLetter} from "../../components/modules/landing/common/containers/NewsLetter";

export const Welcome =()=>{
    return <section>
        <Hero/>
        <FeaturedCourses/>
        <Metrics/>
        <PopularCourses/>
        <CategoriesSection/>
        <FeaturesSection/>
        <LatestCourses/>
        <MobileApp/>
        <Testomonials/>
        <NewsLetter/>
    </section>
}
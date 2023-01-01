export const Hero = () => (
    <section className={"wrapper-x relative flex items-center"} style={{height:"400px"}}>
        <img src={"https://cdn.pixabay.com/photo/2015/05/31/12/14/iphone-791450_960_720.jpg"} alt=""
             className={"w-full absolute top-none left-none rounded-md object-cover h-full"} />
        <div className="text-area relative">
            <div className="text-5xl">
                <span className="text-primary-700">Learn first</span>
            </div>
            <div className="text-5xl">
                to lead <span className="text-primary-700">the rest</span>
            </div>
        </div>
    </section>
)
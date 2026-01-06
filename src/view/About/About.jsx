import Who from "./../../images/group.png"
import Why from "./../../images/why-choose.png"
import Home from "./../../images/about-home-demo.jpg"
function About() {
    return <>
        <div>
            <h1 className="text-6xl py-5">About Page</h1>
            <img src={Home} className="h-110 w-220 mx-45 " />



            <div className="border-1 rounded-2xl my-10 mx-50 bg-red 500 max-w-220
             flex flex-row gap-5 ">

                <img src={Who} className="w-60 h-60 my-10 mx-5 item-left" />

                <div className="item-right flex flex-col p-5 bg-red-800/50">

                    <h1 className="text-3xl font-extrabold p-5">Who We Are</h1>
                    <p>Welcome to Real Estate, a trusted name in the real estate industry committed
                        to helping individuals, families, and investors find the perfect property. With a strong
                        understanding of the local market and a passion for excellence, we deliver transparent,
                        reliable, and client-focused real estate solutions.
                        Since our inception, we have successfully assisted hundreds of clients in buying, selling,
                        and investing in residential and commercial properties, building long-term relationships based
                        on trust and results.
                    </p>
                </div>

            </div>

            <div className="border-1 rounded-2xl my-10 mx-50 bg-red 500 max-w-220
             flex flex-row gap-5 ">
                <img src={Why} className="w-60 h-60 my-10 mx-5" />

                <div className="item-right flex flex-col p-5 bg-red-800/50">

                    <h1 className="text-3xl font-extrabold p-5">Who We Are</h1>
                    <p>Welcome to Real Estate, a trusted name in the real estate industry committed
                        to helping individuals, families, and investors find the perfect property. With a strong
                        understanding of the local market and a passion for excellence, we deliver transparent,
                        reliable, and client-focused real estate solutions.
                        Since our inception, we have successfully assisted hundreds of clients in buying, selling,
                        and investing in residential and commercial properties, building long-term relationships based
                        on trust and results.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default About;
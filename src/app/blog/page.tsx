import Community from "@/components/community"
import Footer from "@/components/footer"
export default function Detailed() {
    return (

        <>


            <section className="dark:bg-darkBg bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        Blogposts
                    </h2>
                    <div className=" justify-between items-center  border-12 ">
                        <Community></Community>
                    </div>

                </div>
            </section>
            <Footer></Footer>

        </>


    )
}
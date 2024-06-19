import React from "react";
import { Button, Card, Carousel } from "flowbite-react";

function Contents() {
    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center lg:my-6 my-3" id="home">
                <div className="mx-6 lg:pe-12 text-justify lg:order-1 order-2">
                    <h1 className="text-[35px] mb-3 font-extrabold">Islamic Boarding School
                        SMK TI BAZMA</h1>
                    <p>
                        Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
                    </p>
                    <div className="mt-4">
                        <Button color="blue">Selengkapnya</Button>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0 order-1 lg:order-2 mx-6">
                    <video className="w-full rounded-xl" controls>
                        <source src="./src/mp4/filmpendek.mp4" type="video/mp4" />
                        <source src="mov_bbb.ogg" type="video/ogg" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
            <br></br>
            <div id="news">
                <div className="grid lg:grid-cols-3 lg:gap-12 gap-4 mx-6">
                    <div class=" bg-white rounded-lg dark:bg-gray-800 text-justify">
                        <div className="py-2">
                            <a href="#">
                                <h5 class="mb-2 text-[23px] font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet 2021</h5>
                            </a>
                        </div>
                        <a href="#">
                            <img class="rounded-lg w-full max-h-60 object-cover object-top" src="/src/img/1.jpg" alt="" />
                        </a>
                        <div class="p-5 px-0 text-justify">
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis vel sem non malesuada. Integer velit massa, pulvinar vitae lacinia a, tempor id ipsum. Morbi sagittis elit in nibh euismod auctor. Sed in purus laoreet justo tristique gravida. Phasellus auctor mollis enim. Integer fermentum, nulla eu semper venenatis, tortor eros elementum lectus, in tincidunt felis est vel ipsum.</p>
                        </div>
                    </div>
                    <div class=" bg-white rounded-lg dark:bg-gray-800 text-justify">
                        <div className="py-2">
                            <a href="#">
                                <h5 class="mb-2 text-[23px] font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet 2021</h5>
                            </a>
                        </div>
                        <a href="#">
                            <img class="rounded-lg w-full max-h-60 object-cover object-top" src="/src/img/2.jpg" alt="" />
                        </a>
                        <div class="p-5 px-0 text-justify">
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis vel sem non malesuada. Integer velit massa, pulvinar vitae lacinia a, tempor id ipsum. Morbi sagittis elit in nibh euismod auctor. Sed in purus laoreet justo tristique gravida. Phasellus auctor mollis enim. Integer fermentum, nulla eu semper venenatis, tortor eros elementum lectus, in tincidunt felis est vel ipsum.</p>
                        </div>
                    </div>
                    <div class=" bg-white rounded-lg dark:bg-gray-800 text-justify">
                        <div className="py-2">
                            <a href="#">
                                <h5 class="mb-2 text-[23px] font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet 2021</h5>
                            </a>
                        </div>
                        <a href="#">
                            <img class="rounded-lg w-full max-h-60 object-cover object-top" src="/src/img/3.jpg" alt="" />
                        </a>
                        <div class="p-5 px-0 text-justify">
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis vel sem non malesuada. Integer velit massa, pulvinar vitae lacinia a, tempor id ipsum. Morbi sagittis elit in nibh euismod auctor. Sed in purus laoreet justo tristique gravida. Phasellus auctor mollis enim. Integer fermentum, nulla eu semper venenatis, tortor eros elementum lectus, in tincidunt felis est vel ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-64 p-2 font-inter grid grid-cols-3 gap-5">
                <div class="h-15 aspect-[4/3] rounded-lg">
                    <Card className="max-w-sm" imgSrc="/src/img/3.jpg" horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm mt-5" imgSrc="/src/img/3.jpg" horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm mt-5" imgSrc="/src/img/3.jpg" horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <div class="h-15 aspect-[4/3] rounded-lg">
                    <Card className="max-w-sm" imgSrc="/src/img/3.jpg" horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm mt-5" imgSrc="/src/img/3.jpg" horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm mt-5" imgSrc="/src/img/3.jpg" horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <div class="h-[800px] aspect-[4/3] rounded-lg w-full"><img src="/src/img/3.jpg" className="h-full object-cover" /></div>
            </div>

            <div id="contact">
                <div className="bg-slate-300 pb-10">
                    <div className="flex flex-col items-auto">
                        <div className="grid lg:grid-cols-2 gap-4 mx-6 items-center">
                            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                                <Carousel
                                    theme={{
                                        root: {
                                            base: "relative h-full w-full",
                                        },
                                        control: {
                                            base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray/30 group-hover:bg-gray/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                                            icon: "h-5 w-5 text-gray text-gray-800 sm:h-6 sm:w-6",
                                        },
                                        indicators: {
                                            active: {
                                                off: "bg-gray-800/50 hover:bg-gray-800",
                                                on: "bg-gray-800",
                                            },
                                            base: "h-3 w-3 rounded-full",
                                            wrapper:
                                                "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
                                        },
                                    }}
                                >
                                    <div className="flex h-full items-center justify-center">
                                        <div className="max-w-sm items-center align-items-center my-auto text-center">
                                            <img
                                                alt="Bonnie image"
                                                height="96"
                                                src="/src/img/1.jpg"
                                                width="96"
                                                className="mb-3 rounded-full shadow-lg mx-auto"
                                            />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                                Bayu Bagaskara1
                                            </h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                Use the carousel component to slide through multiple
                                                elements and images using custom controls, indicators,
                                                intervals, and options
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex h-full items-center justify-center">
                                        <div className="max-w-sm items-center align-items-center my-auto text-center">
                                            <img
                                                alt="Bonnie image"
                                                height="96"
                                                src="/src/img/1.jpg"
                                                width="96"
                                                className="mb-3 rounded-full shadow-lg mx-auto"
                                            />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                                Bayu B2
                                            </h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                Use the carousel component to slide through multiple
                                                elements and images using custom controls, indicators,
                                                intervals, and options
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex h-full items-center justify-center">
                                        <div className="max-w-sm items-center align-items-center my-auto text-center">
                                            <img
                                                alt="Bonnie image"
                                                height="96"
                                                src="/src/img/1.jpg"
                                                width="96"
                                                className="mb-3 rounded-full shadow-lg mx-auto"
                                            />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                                Bayu B-aja
                                            </h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                Use the carousel component to slide through multiple
                                                elements and images using custom controls, indicators,
                                                intervals, and options
                                            </span>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                            <div>
                                <form className="lg:max-w-lg lg:ms-auto w-full">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@mail.com"
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="message"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Leave a comment..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="shadow bg-gray-800 p-5">
                    <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
                        <div className="max-w-[250px] w-full mb-6 mx-auto">
                            <div className="mx-auto grid grid-cols-4 justify-content-center ">
                                <a href="" className="">
                                    <svg
                                        className="w-6 h-6 text-white mx-auto"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                                    </svg>
                                </a>
                                <a href="" className="">
                                    <svg
                                        className="w-6 h-6 text-white mx-auto"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                                        />
                                    </svg>
                                </a>
                                <a href="" className="">
                                    <svg
                                        className="w-6 h-6 text-white mx-auto"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                    </svg>
                                </a>
                                <a href="" className="">
                                    <svg
                                        className="w-6 h-6 text-white mx-auto"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <span className="text-sm text-center text-gray-400 mx-auto">
                            © 2023{"  "}
                            <a href="https://flowbite.com/" className="hover:underline">
                                SMKTIBAZMA
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Contents;
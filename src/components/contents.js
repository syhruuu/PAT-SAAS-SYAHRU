import React from "react";
import { Button, Card } from "flowbite-react";

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
                <div className="max-w-sm" imgSrc="/images/blog/1.jpg" horizontal>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
                        <div className="max-w-sm" imgSrc="/images/blog/1.jpg" horizontal>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
            </div>
            )
}

export default Contents;
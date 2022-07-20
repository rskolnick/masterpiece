/* This example requires Tailwind CSS v2.0+ */
export default function ContactUs() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="divide-y-2 divide-gray-200">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            Get in touch
                        </h2>
                        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Collaborate
                                </h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>steve@masterpiecefireplaces.com</dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (973) 520-7114</dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Questions?
                                </h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>ryan@masterpiecefireplaces.com</dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (973) 520-7114</dd>
                                    </div>
                                </dl>
                            </div>
                            {/* <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Join our team
                                </h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>support@example.com</dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (555) 123-4567</dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Say hello
                                </h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>support@example.com</dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (555) 123-4567</dd>
                                    </div>
                                </dl>
                            </div> */}
                        </div>
                    </div>
                    <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            Locations
                        </h2>
                        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    New Jersey
                                </h3>
                                <div className="mt-2 text-base text-gray-500">
                                    <p>186 Columbia Tpk Suite 5-126</p>
                                    <p className="mt-1">
                                        Florham Park, NJ 07932
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Florida
                                </h3>
                                <div className="mt-2 text-base text-gray-500">
                                    {/* <p>886 Walter Streets</p> */}
                                    <p className="mt-1">Ft Lauderdale, FL</p>
                                </div>
                            </div>
                            {/* <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Toronto
                                </h3>
                                <div className="mt-2 text-base text-gray-500">
                                    <p>7363 Cynthia Pass</p>
                                    <p className="mt-1">Toronto, ON N3Y 4H8</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Chicago
                                </h3>
                                <div className="mt-2 text-base text-gray-500">
                                    <p>726 Mavis Island</p>
                                    <p className="mt-1">Chicago, IL 60601</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

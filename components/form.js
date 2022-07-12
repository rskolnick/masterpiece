import { useRouter } from 'next/router';
import { set } from 'mongoose';
import { useState } from 'react';

export default function Form({ open, setOpen, icon, user }) {
    const router = useRouter();

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);
    const [workPhone, setWorkPhone] = useState(user.work_phone);
    const [cellPhone, setCellPhone] = useState(user.cell_phone);

    const postUser = async (event) => {
        event.preventDefault();
        const data = {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            email: event.target.email.value,
            role: event.target.role.value,
            work_phone: event.target.work_phone.value,
            cell_phone: event.target.cell_phone.value,
            icon: icon,
        };

        const JSONdata = JSON.stringify(data);

        const endpoint = '/api/users/add';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const result = await response.json();
        if (result.error) {
            alert(result.error);
        } else {
            router.push('/dashboard');
            setOpen(false);
        }
    };

    return (
        <div>
            <form
                onSubmit={postUser}
                className="space-y-8 divide-y divide-gray-200 text-inherit"
            >
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {icon === 'add'
                                    ? 'This will create a new user'
                                    : `This will edit the user: ${firstName} ${lastName}`}
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="first_name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    First Name
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    {icon === 'add' ? (
                                        <input
                                            type="text"
                                            name="first_name"
                                            required="true"
                                            id="first_name"
                                            autoComplete="given-name"
                                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            name="first_name"
                                            required="true"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            id="first_name"
                                            autoComplete="given-name"
                                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="last_name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Last name
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    {icon === 'add' ? (
                                        <input
                                            type="text"
                                            name="last_name"
                                            required="true"
                                            id="last_name"
                                            autoComplete="family-name"
                                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            required="true"
                                            id="last_name"
                                            autoComplete="family-name"
                                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Email address
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    {icon === 'add' ? (
                                        <input
                                            id="email"
                                            name="email"
                                            required="true"
                                            type="email"
                                            autoComplete="email"
                                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    ) : (
                                        <input
                                            id="email"
                                            name="email"
                                            value={email}
                                            required="true"
                                            readOnly
                                            type="email"
                                            autoComplete="email"
                                            in
                                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Role
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    {icon === 'add' ? (
                                        <select
                                            id="role"
                                            name="role"
                                            required="true"
                                            autoComplete="role"
                                            className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option>ADMIN</option>
                                            <option>DISTRIBUTOR</option>
                                            <option>DEALER</option>
                                            <option>SUPPLIER</option>
                                        </select>
                                    ) : (
                                        <select
                                            id="role"
                                            name="role"
                                            value={role}
                                            onChange={(e) =>
                                                setRole(e.target.value)
                                            }
                                            required="true"
                                            autoComplete="role"
                                            className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option>ADMIN</option>
                                            <option>DISTRIBUTOR</option>
                                            <option>DEALER</option>
                                            <option>SUPPLIER</option>
                                        </select>
                                    )}
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="work_phone"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Work Phone
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    {icon === 'add' ? (
                                        <input
                                            type="text"
                                            name="work_phone"
                                            required="true"
                                            id="work_phone"
                                            autoComplete="work_phone"
                                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            name="work_phone"
                                            value={workPhone}
                                            onChange={(e) =>
                                                setWorkPhone(e.target.value)
                                            }
                                            required="true"
                                            id="work_phone"
                                            autoComplete="work_phone"
                                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="cell_phone"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Cell Phone
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    {icon === 'add' ? (
                                        <input
                                            type="text"
                                            name="cell_phone"
                                            required="true"
                                            id="cell_phone"
                                            autoComplete="address-level2"
                                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            name="cell_phone"
                                            value={cellPhone}
                                            onChange={(e) =>
                                                setCellPhone(e.target.value)
                                            }
                                            required="true"
                                            id="cell_phone"
                                            autoComplete="address-level2"
                                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="mt-1 sm:mt-0 sm:col-span-1 flex justify-center items-center sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                {icon === 'add' ? (
                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                    >
                                        Add User
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                    >
                                        Edit User
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

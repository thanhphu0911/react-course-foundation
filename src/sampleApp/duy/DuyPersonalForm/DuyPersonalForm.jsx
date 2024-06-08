import React from "react";
import { useForm } from "react-hook-form";

function DuyPersonalForm() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(e) {
    e.preventDefault();
  }

  function onDelete(userId) {
    console.log("onDelete: ", userId);

    // find index -> delete
    // filter
    setUsers((prevState) => {
      const newUsers = prevState.filter((user) => user.id !== userId);
      return newUsers;
    });
    // setUsers(prevState => prevState.filter(user => user.id !== userId));
  }
  console.log("users: ", errors);

  React.useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?_limit=5&_page=${page}`
      );
      const data = await res.json();
      let arr = [];
      data.forEach((item) => {
        const {
          id,
          name,
          email,
          address: { street: street },
          address: { city: city },
        } = item;
        const user = {
          id,
          first_name: name,
          email,
          address: street,
          city: city,
        };
        arr.push(user);
      });
      setUsers(arr);
    }
    fetchUser();
  }, [page]);

  function handleNextPage() {
    setPage((prevState) => prevState + 1);
  }

  function handlePrevPage() {
    setPage((prevState) => prevState - 1);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Sample App: DuyPersonalForm
      </h1>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-5 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3 md:col-start-2 md:col-end-5">
            <form
              onSubmit={(data) => {
                // alert(JSON.stringify(data));
                console.log("data: ", data);
                const {
                  first_name,
                  last_name,
                  email,
                  address,
                  city,
                  district,
                } = data;
                const user = {
                  id: Date.now(),
                  first_name,
                  last_name,
                  email,
                  address, // shorthand
                  city: city,
                  district,
                };
                // setUsers(prevState => {
                //   return [...prevState, user]
                // })
                setUsers((prevState) => [...prevState, user]);
              }}
            >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                        {...register("first_name", {
                          required: true,
                          minLength: 6,
                        })}
                      />
                      {errors?.first_name && (
                        <span className="pt-2 text-red-600 text-sm">
                          *This field is required
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                        {...register("last_name")}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                        {...register("email", {
                          required: true,
                          minLength: {
                            value: 6,
                            message: "*Text should be lenght > 6",
                          },
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: `*Email isn't correct format`,
                          },
                        })}
                      />
                      <span className="pt-2 text-red-600 text-sm">
                        {errors?.minLength?.message}
                        {errors?.email?.message}
                      </span>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                        {...register("address", {
                          required: true,
                          minLength: {
                            value: 6,
                            message: "*Text should be lenght > 6",
                          },
                        })}
                      />
                      {errors?.address && (
                        <span className="pt-2 text-red-600 text-sm">
                          *Address is required
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("city")}
                      >
                        <option value="HN">Ha Noi</option>
                        <option value="DN">Da Nang</option>
                        <option value="HCM">Ho Chi Minh</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium text-gray-700"
                      >
                        District
                      </label>
                      <select
                        id="district"
                        name="district"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("district")}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <div className="relative overflow-x-auto mx-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                First name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                District
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => {
                return (
                  <tr
                    key={user.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.first_name}
                    </th>
                    <td className="px-6 py-4">{user.last_name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.address}</td>
                    <td className="px-6 py-4">{user.city}</td>
                    <td className="px-6 py-4">{user.district}</td>

                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => onDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  colSpan={8}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  No data
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={handlePrevPage}
          className=" justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Prev
        </button>
        <span className="px-4">Page {page}</span>
        <button
          onClick={handleNextPage}
          className=" justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DuyPersonalForm;

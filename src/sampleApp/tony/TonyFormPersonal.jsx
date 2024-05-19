import React from 'react'
import { useForm } from "react-hook-form";

function TonyFormPersonal() {
  const [users, setUsers] = React.useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  function onSubmit(e) {
    e.preventDefault()
  }

  function onDelete(userId) {
    console.log('onDelete: ', userId);

    // find index -> delete
    // filter
    setUsers(prevState => {
      const newUsers = prevState.filter(user => user.id !== userId)
      return newUsers
    });
    // setUsers(prevState => prevState.filter(user => user.id !== userId));
  }
  console.log("users: ", errors)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Sample App: TonyFormPersonal</h1>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form 
              onSubmit={handleSubmit((data) => {
                // alert(JSON.stringify(data));
                console.log('data: ', data)
                const { first_name, last_name, email, country } = data;
                const user = {
                  id: Date.now(),
                  first_name,
                  last_name,
                  email, // shorthand
                  country: country
                }
                // setUsers(prevState => {
                //   return [...prevState, user]
                // })
                setUsers(prevState => [...prevState, user])
              })}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                      <input 
                        type="text"
                        name="first_name" 
                        id="first_name" 
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        {...register("first_name", {
                          required: true,
                          minLength: 6
                        })}
                      />
                       {errors?.first_name && <span>This field is required</span>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input 
                        type="text"
                        name="last_name" 
                        id="last_name" 
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("last_name")}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input 
                        type="text" 
                        name="email_address" 
                        id="email_address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("email", {
                          required: true,
                          minLength: {
                            value: 6,
                            message: "Text should be lenght > 6"
                          },
                          pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: `Email isn't correct format`
                          }
                        })}
                      />
                       {errors?.minLength?.message}
                      {errors?.email?.message}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                      <select 
                        id="country" 
                        name="country" 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("country")}
                      >
                        <option value="US">United States</option>
                        <option value="CAN">Canada</option>
                        <option value="MEX">Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                      ID                    
                    </th>
                    <th scope="col" class="px-6 py-3">
                      First name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                </tr>
            </thead>
            <tbody>
              {users.length > 0 ? users.map(user => {
                return (
                  <tr key={user.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.id}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.first_name}
                    </th>
                    <td class="px-6 py-4">
                      {user.last_name}
                    </td>
                    <td class="px-6 py-4">
                      {user.email}
                    </td>
                    <td class="px-6 py-4">
                      {user.country}
                    </td>
                    <td class="px-6 py-4">
                    <button 
                      type="button" 
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>
                    </td>
                  </tr>
                )
              }) : (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" colSpan={4} class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                     No data
                  </th>
                </tr>
              )}
                
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default TonyFormPersonal
import clsx from 'clsx';
import React from 'react'
import { useSelector } from 'react-redux';
import { useSmallScreen } from './hooks/useSmallScreen'
/*
- access node DOM in jsx
- don't cause re-render when update ref
- keep to data during component re-render
*/
// let x = 10;
const FancyModal = React.forwardRef((props, ref) => {
  const [openModal, setOpenModal] = React.useState(false); // local state

  function handleCloseModal() {
    setOpenModal(false)
  }

  React.useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        setOpenModal(true)
      },
      closeModal: () => {
        handleCloseModal();
      }
    }
  }, [])

  return (
    <div 
      id="default-modal" 
      ref={ref} 
      aria-hidden="true" 
      className={clsx(`
        "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
        ${openModal ? 'block' : 'hidden'}
      `)}
    >
     
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button onClick={handleCloseModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button onClick={handleCloseModal} data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
          </div>
      </div>
    </div>
  )
})

function RefHook() {
  const { isSmalScreen, multiple, multipleTotal } = useSmallScreen();
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const firstNameRef = React.useRef(null);
  const countRef = React.useRef(10);
  const modalRef = React.useRef(null);
  const count = useSelector(state => state.app.count);

  function onFocus() {
    console.log('onFocus: ', firstNameRef)
    firstNameRef.current.focus();
    firstNameRef.current.select()    
    firstNameRef.current.value = 'tony';
    // x = x + 10;

    countRef.current = countRef.current + 10

    console.log('modalRef: ', modalRef)

    setTimestamp(Date.now());
  }

  function _handleOpenModal() {
    // console.log(modalRef.current.openModal())
    modalRef.current.openModal();
  }


  console.log('Ref hook re-render', multiple)

  return (
    <div>
      <h1>RefHook</h1>
      Variables X: {countRef.current} <br />

      First Name: <input type="text" ref={firstNameRef}  className='border' /> <br />
 
      <button type="button" onClick={onFocus}>Focus</button> <br />
      <button type="button" onClick={_handleOpenModal}>Open Modal</button> <br />

      <FancyModal ref={modalRef}  /> <br />

      <div>Get state from store redux: {count}</div> <br />
      <br />
      Demo Custom hooks - small screen: {isSmalScreen ? ' yes' : 'no'}
      <br />
      <button type="button" onClick={multipleTotal}>Multiple custom hooks</button> <br />

   
    </div>
  )
}

export default RefHook
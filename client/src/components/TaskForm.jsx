import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createTask } from '../features/tasks/taskSlice.js';

const TaskForm = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [name, setName] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();

      dispatch(createTask({ name }));
      setName('');
   };

   return (
      <section className="mt-4 w-full max-w-lg">
         <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-1.5">
               <label
                  className="block text-[18px] text-gray-900"
                  htmlFor="task"
               >
                  Task
               </label>
               <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-input-outline text-[18px] sm:text-[16px]"
                  type="text"
                  id="task"
                  name="task"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <div className="mt-4">
                  <button
                     className="block w-full py-2 bg-black text-white rounded-md
                   transition-transform duration-150 ease-in-out
                   hover:scale-103 hover:bg-gray-800 focus:outline-none"
                  >
                     Add task
                  </button>
               </div>
            </div>
         </form>
      </section>
   );
};

export default TaskForm;

import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice.js';

const TaskItem = ({ task }) => {
   const dispatch = useDispatch();

   return (
      <div className="flex w-full max-w-lg overflow-hidden rounded-md">
         <div className="bg-[#f4f4f4] w-full px-4 py-4">
            <h2 className="text-[18px] font-bold">{task.name}</h2>
            <div className="mt-1.5 text-[12px]">
               {new Date(task.createdAt).toLocaleString('en-US')}
            </div>
         </div>
         <button
            onClick={() => dispatch(deleteTask(task._id))}
            className="flex justify-center items-center text-white bg-theme-dark px-4 cursor-pointer hover:bg-theme-light"
         >
            <MdDelete className="h-5 w-auto transform transition-transform duration-200 hover:scale-115" />
         </button>
      </div>
   );
};

export default TaskItem;

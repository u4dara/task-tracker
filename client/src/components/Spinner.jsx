import { ClipLoader } from 'react-spinners';

const override = {
   display: 'block',
   margin: '100px auto',
};

const Spinner = ({ loading }) => {
   return (
      <ClipLoader
         color="#e27070"
         loading={loading}
         cssOverride={override}
         size={80}
      />
   );
};

export default Spinner;

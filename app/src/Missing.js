import {Link} from 'react-router-dom';

const Missing = () => {
  return (
    <>
    <h2>Page not FOund !!</h2>

    <Link to="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
      Try visiting out Homepage
    </Link>
    </>
  );
};

export default Missing;

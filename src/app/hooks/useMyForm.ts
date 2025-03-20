import { useRef} from 'react';
import { FormInstance } from 'antd';


const useMyForm = () => {
  const formRef = useRef<FormInstance>(null);
  return { formRef };
};

export default useMyForm;
import { useEffect, useState } from 'react';
import { IMatStatus } from '../interfaces/IMatStatus';
import { IService } from '../interfaces/IService';

export interface Status {
    results: IMatStatus[];
  }

const useMatsService = () => {
    const [result, setResult] = useState<IService<IMatStatus[]>>({
      status: 'loading'
    });
  
    useEffect(() => {
      fetch('/mats')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, []);
  
    return result;
  };
  
  export default useMatsService;
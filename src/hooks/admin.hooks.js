import { useMutation, useQuery } from '@tanstack/react-query';
import { getPendingPayments, verifyPayment , verifyAdmin } from '../api';
import errorParser from '../utils/errorParser';
import { toast } from '../components';

function usePendingPayments(setErrors, eventName) {
    const { isLoading, isSuccess, isError, data, error } = useQuery({ queryKey: ['pendingPayments', eventName], queryFn: getPendingPayments(eventName) })
    if (isError) {
        const parsedError = errorParser(error)
        parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
        setErrors(prevErrors => {
            for (const key in prevErrors) {
                if (parsedError.hasOwnProperty(key)) {
                    prevErrors[key] = parsedError[key]
                }
            }
            return prevErrors
        })
        toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
    }
    else if (isSuccess) {
        setErrors(prevErrors => {
            for (const key in prevErrors) {
                prevErrors[key] = ''
            }
            return prevErrors
        })
        return data
    }
    return { isLoading, isSuccess, isError, data, error }
}

function useVerifyAdmin(setErrors, email, password) {
    const { isLoading, isSuccess, isError, data, error } = useQuery(
      ["verifyAdmin", email, password],
      () => verifyAdmin(email, password)
    );
  
    if (isError) {
      const parsedError = errorParser(error);
      parsedError.error &&
        toast.error(parsedError.error, { autoClose: 5000 });
      setErrors((prevErrors) => {
        for (const key in prevErrors) {
          if (parsedError.hasOwnProperty(key)) {
            prevErrors[key] = parsedError[key];
          }
        }
        return prevErrors;
      });
      toast.error(
        "Errors in verifying admin. Please check the credentials and try again.",
        { autoClose: 5000 }
      );
    } else if (isSuccess) {
      setErrors((prevErrors) => {
        for (const key in prevErrors) {
          prevErrors[key] = "";
        }
        return prevErrors;
      });
      return data;
    }
    return { isLoading, isSuccess, isError, data, error };
  }
  

function useVerifyPayment(setErrors, eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(verifyPayment(eventName), {
        onError: (err) => {
            const parsedError = errorParser(err)
            parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
            setErrors(prevErrors => {
                for (const key in prevErrors) {
                    if (parsedError.hasOwnProperty(key)) {
                        prevErrors[key] = parsedError[key]
                    }
                }
                return prevErrors
            })
            toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}

export {
    usePendingPayments,
    useVerifyPayment,
    useVerifyAdmin
}
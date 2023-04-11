import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPendingPayments, verifyPayment, verifyAdmin, loginAdmin, getRegistrations } from '../api';
import errorParser from '../utils/errorParser';
import { toast } from '../components';

function useLoginAdmin(setErrors) {
  const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(loginAdmin, {
    onError: (err) => {
      const parsedError = errorParser(err)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        setErrors(prevErrors => {
          for (const key in prevErrors) {
            if (parsedError.hasOwnProperty(key)) {
              prevErrors[key] = parsedError[key]
            }
          }
          return prevErrors
        })
        toast.error('Errors in the login form. Please try again.', { autoClose: 5000 })
      }
    }
  })
  return { mutate, isLoading, isSuccess, isError, data, error }
}

function usePendingPayments(eventName) {
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['pendingPayments', eventName], queryFn: getPendingPayments(eventName), enabled: !!eventName })
  if (isError) {
    const parsedError = errorParser(error)
    if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
    else {
      parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
      toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
    }
  }
  return { isLoading, data }
}

function useVerifyAdmin() {
  const { isLoading, isSuccess, isError, data, error } = useQuery({ queryKey: ['verifyAdmin'], queryFn: verifyAdmin, retry: false })

  if (isError) {
    const parsedError = errorParser(error)
    if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
    else {
      parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
    }
  }
  return { isLoading, isSuccess, isError, data, error }
}

function useVerifyPayment(eventName) {
  const queryClient = useQueryClient()
  const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(verifyPayment(eventName), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pendingPayments', eventName] })
    },
    onError: (err) => {
      const parsedError = errorParser(err)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        toast.error(`Errors while verifying payment: ${parsedError[Object.keys(parsedError)[0]]}`, { autoClose: 5000 })
      }
    }
  })
  return { mutate, isLoading, isSuccess, isError, data, error }
}

function useGetRegistrations(eventName) {
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['registrations', eventName], queryFn: getRegistrations(eventName), enabled: !!eventName })
  if (isError) {
    const parsedError = errorParser(error)
    if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
    else {
      parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
      toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
    }
  }
  return { isLoading, data }
}

export {
  useLoginAdmin,
  usePendingPayments,
  useVerifyPayment,
  useVerifyAdmin,
  useGetRegistrations,
}
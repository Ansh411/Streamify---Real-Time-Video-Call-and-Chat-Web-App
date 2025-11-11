import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";

const useLogin = () => {
    const queryClient = useQueryClient();

  const{isPending, error, mutate} = useMutation({
    mutationFn: login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"]}),
  });

  return {isPending , error, loginMutation:mutate};

};

export default useLogin;
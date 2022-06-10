import { useMutation, UseMutationOptions } from "react-query";

export const useCustomMutation = (
  options?: UseMutationOptions<string, Error, string>
) =>
  useMutation<string, Error, string>(
    (id: string) => Promise.resolve(id),
    options
  );

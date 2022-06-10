import { useCustomMutation } from "@monorepo/common";

export const useRunMutation = () =>
  useCustomMutation({
    onError: (e) => console.error(e.message),
  });

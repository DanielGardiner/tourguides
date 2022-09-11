import { useMutation, useQueryClient } from "react-query";

const updateUser = async (user) => {
  await fetch(`/api/user/${user?.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      role: "contributor",
    }),
  });
};

export default function useUpdateUser(user) {
  const queryClient = useQueryClient();
  return useMutation((user) => updateUser(user), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
}

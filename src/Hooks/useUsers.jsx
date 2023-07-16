import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = () => {
  const { data: user = [], isLoading: uLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(
        "https://job-task-server.onrender.com/api/v1/user/details"
      );
      return res.data;
    },
  });
  return { user, uLoading };
};

export default useUser;

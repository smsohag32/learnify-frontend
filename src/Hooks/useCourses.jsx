import { useQuery } from "@tanstack/react-query";
import useSecureAuth from "./useSecureAuth";

const useCourses = () => {
  const { secureAuth } = useSecureAuth();
  const {
    data: coursesData = [],
    isLoading: cLoading,
    refetch,
  } = useQuery({
    queryKey: ["coursesData"],
    queryFn: async () => {
      const res = await secureAuth.post(`/api/v1/course/list`);
      return res.data?.send_res;
    },
  });
  return { coursesData, cLoading, refetch };
};

export default useCourses;

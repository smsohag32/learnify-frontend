import useUser from "../../../Hooks/useUser";

const Account = () => {
  // load user information
  const { user } = useUser();

  return (
    <div>
      <span>Todo details view account : {user?.full_name}</span>
    </div>
  );
};

export default Account;

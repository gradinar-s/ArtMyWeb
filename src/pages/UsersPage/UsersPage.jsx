import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../api/api";
import { setUsers } from "../../store/userReducer";
import { useRequest } from "../../hooks/useRequest";
import { Button, Skeleton } from "../../components/ui";
import { UsersTable, GenderChoice } from "../../components/application";

const UsersPage = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageRowsCount, setPageRowsCount] = useState(5);
  const [totalUsersCount, setTotalUsersCount] = useState(0);

  const users = useSelector((state) => state.users.users);

  const fetchUsersWithParams = () => {
    return fetchUsers({
      gender,
      page: currentPage + 1,
      per_page: pageRowsCount,
    });
  };

  const [data, isLoading, error] = useRequest(fetchUsersWithParams, [
    gender,
    currentPage,
    pageRowsCount,
  ]);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.data));
      setTotalUsersCount(data.meta.pagination.total);
    }
  }, [data]);

  const onResetFilters = () => {
    setGender(null);
  };

  return (
    <div>
      <GenderChoice gender={gender} onChange={setGender} />

      <Button
        fullWidth
        variant="contained"
        onClick={onResetFilters}
        sx={{ mb: "1rem", mt: "1rem" }}
      >
        Reset
      </Button>

      {isLoading ? (
        <Skeleton height={300} />
      ) : (
        <UsersTable
          data={users}
          page={currentPage}
          total={totalUsersCount}
          pageRowsCount={pageRowsCount}
          setCurrentPage={setCurrentPage}
          setPageRowsCount={setPageRowsCount}
        />
      )}
    </div>
  );
};

export default UsersPage;

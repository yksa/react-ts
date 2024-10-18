import { Text } from "@/components/Text";
import { useProfile } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { data, isFetching } = useProfile();

  return (
    <div className="p-4">
      <Text className={"text-xl font-semibold block"}>Profile Page</Text>
      {isFetching && <Text>Loading...</Text>}
      <Text>{data?.user?.username}</Text>
    </div>
  );
};

export default ProfilePage;

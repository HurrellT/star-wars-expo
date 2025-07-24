import { Pressable, Text, View } from "react-native";
import { Button } from "@hurrellt/ui";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <Button text="Click Me" onClick={() => router.push("/person/11")} />
    </View>
  );
}

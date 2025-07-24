import { Pressable, Text, View } from "react-native";
import { Button } from "@hurrellt/ui";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <Button text="Click Me" onClick={() => alert("Button Pressed!")} 
      // className="bg-blue-900" 
      />
    </View>
  );
}
